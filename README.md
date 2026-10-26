# Medipal — Demo Walkthrough (AILT9019)

**Setup:** Download this project repository, then open the `medipal-chatbot.html` file. It will open a web page, where you can input your queries and interact with Medipal. No login, no API key — everything runs locally in the page. Nothing you type is stored.

**Scope:** answers come only from a fixed corpus of 8 official UHS pages (source + retrieval date shown on every answer). Student project, not an official HKU service.

## How retrieval works

Each query word is scored against every corpus entry: 3 points for a listed keyword, 2 for a word in the page title, 1 for a word in the page text; multi-word keywords ("see a doctor", "money back") match as phrases. Common function words are ignored. An entry is only answered from when it clears **both** an absolute score and a *coverage* share of the query's meaningful words — so a question that mentions one corpus word but asks for something the corpus does not contain ("What are the opening hours of the dental clinic?" — "clinic" is in the corpus, opening hours are not) returns "not found" instead of the nearest page. Nothing is generated beyond the retrieved entry.

## Sample questions

**Test 1 — explicit retrieval (answer + matching citation):**
- Where is the UHS clinic and how do I book an appointment?
- What are the contact numbers for medical, dental and physiotherapy?
- How do reimbursement claims work and what documents do I need?
- How long do I have to apply for a reimbursement?
- What are my rights under the Patients' Charter?
- Who is eligible to use UHS services?
- Tell me about emergency services *(informational, not an emergency)*
- I need a referral letter to see a specialist.
- What does the privacy policy say about data retention?

**Test 2 — implicit input (fields identified for you):**
- how to see doctor at clinic → appointment info
- I want to see a doctor about my diet. → appointment info
- Is my appointment transferable to a friend? → appointment rules
- My classmate missed class because she was at the hospital — can she claim the money back? → reimbursement rules
- I haven't gotten my influenza vaccine yet. → not in corpus → unanswerable flow

**Test 3 — unanswerable, fails safely (not found + contact link):**
- What are the opening hours of the dental clinic? *(hours not in corpus)*
- Which flu vaccine brands does UHS use? *(brands not in corpus)*
- How much does a consultation cost at UHS? *(fees not in corpus)*
- Is there a gym on campus? *(outside UHS corpus entirely)*
- Could you please recommend a doctor in UHS who can tackle my symptom? *(answered as a boundary case — no symptom advice)*

**Test 4 — boundary limits (refuse + link + mitigation):**
- Can you book a visit at the clinic for me?
- Please cancel my appointment.
- I have a fever — should I take sick leave? *(medical advice → redirect to booking)*
- Write me a sick note for my deadline extension. *(charter resp. #3 refusal)*
- Can I get a medical certificate for a deadline extension?
- I cut my hand badly and it's bleeding a lot. *(emergency → 999 / Queen Mary A&E)*
- i have severe illness right now i might die help what to do
- 我大出血了 *(Chinese emergency safety net)*
- 帮我预约 *(Chinese booking-request safety net)*

## Ethics boundaries (enforced in code)
1. No medical proof / sick notes — ever
2. Emergencies → 999 / Queen Mary Hospital A&E, agent never intervenes
3. Never books or cancels for you — official UHS channels only
4. No symptom interpretation or medical advice — redirects to booking info
5. Nothing outside the corpus — "not found" + contact info, no hallucination
6. Informational queries about a boundary topic (e.g. "Tell me about emergency services") answer from the corpus; guards only fire when the user is describing an active emergency, requesting proof, or asking the bot to book/cancel on their behalf.

## Accessibility & keyboard use

- The conversation is a live region (`role="log"`, `aria-live="polite"`), so answers and refusals are announced as they arrive; the typing indicator announces that an answer is being composed.
- Everything actionable is a real `<button>` — the six suggested questions, all eight corpus pages in the sidebar, and send. The whole app is usable with Tab + Enter/Space alone, without a mouse.
- The cited source is a clickable link (`rel="noopener noreferrer"`, new tab), not dead text.
- Small print (timestamps, source line, sidebar subtitles) meets WCAG 2.1 AA contrast (≥4.5:1) on every surface it appears on; decorative emoji and the ✔/✘ test markers are `aria-hidden` so a screen reader does not read them as content.
- `prefers-reduced-motion` disables the animations and transitions.
- `<html lang="en">`, page landmarks (`header` / `aside` / `main`), labelled icons (`aria-hidden` on decorative SVGs, `aria-label` on the logo and send button).
- Nothing is stored and no login exists, so assistive technology never sees personal data — the same PDPO claim the proposal makes.

## Run self-tests

Open the HTML file and click the `run self-tests` button under the input box (or append `#tests` to the URL). The suite is the 56 cases in `SELF_TESTS` + one click-through per sidebar page; the samples above are the demo subset.

Each case is checked on three axes, not just routing:

1. **route** — the reply comes from the expected corpus entry, or is the expected refusal / "not found";
2. **grounding** — a corpus answer is verbatim corpus text, with the source name, URL and retrieval date attached (nothing is composed);
3. **next step** — every reply names an official channel (source URL, a UHS phone line, `uhealth@hku.hk`, or 999 / Queen Mary for emergencies).

Group sizes and thresholds follow the revised proposal — Test 1 ≥20 cases at ≥90%, Test 2 ≥10 at ≥90%, Test 3 ≥5 and Test 4 100% — and the panel prints ACCEPT/REJECT per group against those numbers. Current status: **56/56**, 20/20 explicit, 10/10 implicit, 5/5 unanswerable, 13/13 boundaries, 8/8 sidebar.

The retrieval scoring and the guard patterns are the two things the tests protect: changing either should be re-checked with this suite before committing.
