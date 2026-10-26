
const RETRIEVED = "20 Oct 2026";

const LOGO_MINI = `<svg viewBox="0 0 44 44" width="26" height="26" aria-hidden="true">
  <rect x="2" y="2" width="40" height="40" rx="11" fill="#E8F3EE"/>
  <path d="M22 9c-7.2 0-13 4.7-13 10.8 0 3.5 2 6.6 5.1 8.6L12.5 34l6.3-2.6c1 .2 2.1.4 3.2.4 7.2 0 13-4.7 13-10.9S29.2 9 22 9z" fill="#0B5C46"/>
  <rect x="20" y="14.2" width="4" height="11.2" rx="1.4" fill="#E8F3EE"/>
  <rect x="16.4" y="17.8" width="11.2" height="4" rx="1.4" fill="#E8F3EE"/>
</svg>`;

const KB = [
{
  id:"appointment", color:"#2E7CD6", title:"Appointments & Location", src:"Medical – University Health Service | HKU",
  url:"uhs.hku.hk (Medical)", keywords:["appointment","book","booking","reserve","schedule","location","where","address","meng wah","visit","see a doctor","see doctor","clinic","cancel","registration","slot","timeslot","预约","挂号","门诊","位置","地址","看医生","取消"],
  body:`<b>Location</b> — 2/F, Meng Wah Complex.
<b>Three ways to book (in advance):</b>
1. Web booking (UHS Web Appointment System)
2. Call 2549 4686
3. In person at 2/F Meng Wah Complex

<b>Good to know</b>
· The time you get is your <b>registration time</b> — report to the medical reception then. Doctors may need longer with some patients, so waiting is normal.
· Appointments are personal: booked under your own name and number, <b>cannot be transferred</b>.
· Cancelled slots are released to everyone on a <b>first-come, first-served</b> basis; no slots are reserved for individuals.
· Cancel yourself via the online system, phone, or in person — the clinic will not cancel on someone's behalf without written authorization.

<b>When to book</b> — to discuss health concerns, get a specialist referral, learn lab results, or refill/discuss medications.

<b>Children under 16</b> should be accompanied by a parent/legal guardian (or a competent adult with a signed letter of authorization), because consent and accurate symptom description matter.`
},
{
  id:"contact", color:"#0E9384", title:"Contact Directory", src:"UHS Web Appointment System | HKU",
  url:"uhs.hku.hk (Contact)", keywords:["contact","phone","call","email","number","telephone","physiotherapy","dental contact","reach","电话","联系方式","邮箱"],
  body:`<b>UHS contact directory</b>
· Medical: <b>2549 4686</b>
· Physiotherapy: <b>3917 2509</b>
· Dental: <b>3917 2510</b>
· Email: <b>uhealth@hku.hk</b>`
},
{
  id:"emergency", color:"#C0392B", title:"Emergency Services", src:"Emergency Services – University Health Service | HKU",
  url:"uhs.hku.hk (Emergency Services)", keywords:["emergency","urgent","accident","severe","bleeding","999","ambulance","toothache","dental emergency","swelling","broken tooth","injury","急诊","急救","流血","牙痛"],
  body:`<b>Medical emergencies</b>
Follow the Safety Office's Response for Medical Emergency. The nearest Accident &amp; Emergency Department is <b>Queen Mary Hospital</b> (public hospital), on Pokfulam Road.

<b>Dental emergencies — same-day service</b> for relief of dental pain and infection if you have:
· Severe toothache
· Swelling and/or infection, with or without fever
· Accident involving tooth and jaw
· Broken tooth with pain or sensitivity
· Oral lesion and any other dental emergency

⚠️ <i>Medipal is not for emergency handling. In a life-threatening situation call <b>999</b> immediately.</i>`
},
{
  id:"eligibility", color:"#7C5CBF", title:"Eligibility", src:"Eligibility to Use UHS Services | HKU",
  url:"uhs.hku.hk (Eligible Users)", keywords:["eligible","eligibility","who can","entitled","staff","student","depend","ineligible","expire","graduate","leave","资格","合资格","谁可以","学生","教职员"],
  body:`<b>Who can use UHS Main Campus Clinic</b>
· Eligible staff and their dependents
· Students

<b>If you become ineligible</b> (e.g. employment contract or studies completed):
· You and your dependents can no longer receive UHS services — <b>even with a previously booked appointment</b>.
· Booked appointments and uncollected medications will be <b>cancelled without prior notice</b>.`
},
{
  id:"referral", color:"#0E8FB8", title:"Student Benefits — Referrals", src:"For HKU Students – UHS | HKU",
  url:"uhs.hku.hk (Medical Benefits for HKU students)", keywords:["referral","referral letter","specialist","specialist consultation","see specialist","tertiary","secondary","转介","专科","介绍信"],
  body:`<b>Referrals to specialists</b>
· Eligible students may be <b>referred by UHS physicians</b> for specialist consultations outside UHS (primary, secondary and tertiary care provided by the University).
· Bring the <b>referral letter</b> from the UHS physician to your specialist consultation.
· After each specialist visit, <b>return the reply slip</b> to the UHS physician.`
},
{
  id:"reimbursement", color:"#C07A08", title:"Student Benefits — Reimbursements", src:"For HKU Students – UHS | HKU",
  url:"uhs.hku.hk (Medical Benefits for HKU students)", keywords:["reimbursement","reimburse","claim","money back","expense","receipt","hospitalisation","hospitalization","refund","payment","报销","退款","收据","住院"],
  body:`<b>What is reimbursable</b>
· Only procedures, consultations and hospitalisations <b>referred by UHS physicians</b> or authorised by the UHS Director.
· Only <b>public</b> specialist clinics and public wards of government hospitals (at Hong Kong resident rate).
· <b>Not</b> reimbursable: preventive / elective / experimental procedures, sundry and self-financed items, external appliances, medications not listed under the Pharmacy Board of HKSAR Government. A&amp;E consultation fees are <b>not</b> reimbursable.

<b>Timing</b>
Pay first, then apply within <b>3 months</b> of the transaction date — late submissions are not processed.

<b>How to apply</b>
Fill in the Reimbursement Form and send it to UHS (mail or in person) with:
· Original receipts (HA Go App guide available for e-receipts)
· Specialist reply slip (copy)
· Medication details (names, dosage, total quantity)
· Investigation reports / discharge summary

Reimbursements are paid to the student's bank account.`
},
{
  id:"charter", color:"#C2508F", title:"Patients' Charter", src:"Patients' Charter – UHS | HKU",
  url:"uhs.hku.hk (Patients' Charter)", keywords:["right","rights","responsibility","responsibilities","charter","complaint","privacy of patients","consent","medical records","feedback","权利","责任","投诉","病人约章"],
  body:`<b>Your rights</b>
1. Be informed about treatment plans and give informed consent.
2. Know the name and rank of staff providing services.
3. Have privacy respected by all UHS staff.
4. Access your own medical records.
5. Make a complaint through official channels and have it dealt with promptly and fairly.

<b>Your responsibilities</b>
1. Give providers full information: current health, past illnesses, allergies and other relevant details.
2. Follow the prescribed and agreed treatment plan.
3. <b>Do not ask providers for incorrect information, receipts or certificates.</b>
4. Pay all fees and charges as required.
5. Keep appointments, or notify the clinic as early as possible if you cannot.`
},
{
  id:"privacy", color:"#5F6F68", title:"Privacy Policy", src:"Privacy Policy Statement – UHS | HKU",
  url:"uhs.hku.hk (Privacy Policy)", keywords:["privacy","personal data","pdpo","data","cookies","cookie","retention","confidential","access and correction","enquiry","隐私","个人资料","资料保存"],
  body:`<b>Privacy Policy Statement (complies with PDPO, Cap. 486)</b>
1. <b>Collection &amp; use</b> — personal data is used only for the stated collection purposes or directly related ones.
2. <b>Retention &amp; security</b> — kept only as long as necessary, then securely erased; security measures against unauthorized access.
3. <b>Disclosure</b> — strict confidentiality; disclosed to third parties only for collection purposes, where required by law, or as stated in the collection statement.
4. <b>Access &amp; correction</b> — apply via form; a processing fee applies (you are informed in advance); pay before data is sent out — unpaid applications are auto-rejected after 40 days.
5. <b>Website logs</b> — non-identifiable data (IP, browser, OS) for traffic analysis only.
6. <b>Cookies</b> — used to personalize content and analyse traffic; declining may break some features.
7. <b>Updates</b> — changes posted on the page; continued use = acceptance.
Enquiries: <b>uhealth@hku.hk</b> · HKU-wide policy: hku.hk/about/policies_reports/privacy_policy.html`
}
];

const TOPICS = KB.map(e => e.id);

/* ---------- retrieval ---------- */
function norm(s){return s.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff\s]/g," ").split(/\s+/).filter(Boolean);}

function scoreEntry(q, entry){
  const words = norm(q);
  const isCJK = /[\u4e00-\u9fff]/.test(q);
  let score = 0;
  if(isCJK){ for(const k of entry.keywords){ if(q.includes(k)) score += 3; } }
  for(const w of words){
    for(const k of entry.keywords){
      if(w === k || (k.length>3 && w.startsWith(k)) || k.includes(w) && w.length>3) score += 3;
    }
  }
  const hay = norm(entry.title + " " + entry.body.replace(/<[^>]+>/g," "));
  for(const w of words){ if(hay.includes(w) && w.length>3) score += 1; }
  return score;
}

function retrieve(q){ 
  let best=null, bs=0;
  for(const e of KB){ const s=scoreEntry(q,e); if(s>bs){bs=s;best=e;} }
  return bs>=3 ? {entry:best,score:bs} : null;
}

/* ---------- boundary guards ---------- */
const EMERGENCY_RX = /\b(emergency|urgent(ly)?|999|ambulance|severe(ly)?\s*(pain|bleed)|bleed(ing)?|cut\s*(my\s*hand\s*)?badly|deep\s*cut|chest pain|can'?t breathe|unconscious|faint(ed|ing)?)\b|急诊|急救|流血|紧急|牙[^\s，。]{0,2}(痛|疼)/i;
const PROOF_RX = /\b(medical\s*(proof|certificate|cert|note)|sick\s*note|doctor'?s\s*note|certificate\s*for|deadline\s*extension|extend\s*(the\s*)?deadline|extension\s*(for|of)\s*(my\s*)?(assignment|course|homework|paper|project)|excuse\s*(my\s*)?absence|proof\s*(for|of)\s*(illness|absence))\b|病假条|医疗证明|延期证明|开证明/i;
const BOOKME_RX = /\b((can|could|would|will)\s*you\s*(please\s*)?(help\s*me\s*)?(book|make\s*(an?\s*)?appointment|reserve)|book\s*(me|it|for\s*me)|make\s*(an?\s*)?appointment\s*for\s*me|cancel\s*(my|his|her|their)\s*appointment\s*(for\s*me)?)|帮我(预约|挂号|取消)|帮我订/i;
const HOURS_RX = /\b(opening\s*hours?|open(ing)?\s*times?|what\s*time.*(open|close)|when.*(open|close)|closed\s*on)\b|营业时间|开放时间|几点开|几点关/i;
const FEES_RX = /\b(fees?|charges?|costs?|price|how\s*much|free)\b|收费|费用|多少钱|免费/i;

function ranked(q){
  return KB.map(e=>({e,s:scoreEntry(q,e)})).sort((a,b)=>b.s-a.s).filter(x=>x.s>0).slice(0,3);
}
function topkBox(rankedList){
  if(!rankedList.length) return "";
  const rows = rankedList.map(r=>`<li style="display:flex;align-items:center;gap:6px"><span style="width:6px;height:6px;border-radius:50%;background:${r.e.color};flex-shrink:0"></span>${r.e.title} <span style="color:#9DB8AF">(score ${r.s})</span></li>`).join("");
  return `<details><summary>Top-k retrieved passages (${rankedList.length})</summary><ul>${rows}</ul></details>`;
}
function cite(e){ return `<span class="cite">📎 Source: ${e.src} — ${e.url} · corpus retrieved ${RETRIEVED} · info may not be up to date, please confirm with official UHS channels</span>`; }

const SYMPTOM_RX = /\b(i\s*(feel|am)\s*(sick|unwell|ill)|not\s*feeling\s*well|symptom|fever|cough(ing)?|headache|dizzy|sore\s*throat|rash|vomit|diarrhea|stomach\s*(ache|pain)|feel\s*pain|hurts?)\b|发烧|头痛|咳嗽|不舒服|拉肚子/i;

function answer(q){
  if(EMERGENCY_RX.test(q)){
    const e = KB.find(x=>x.id==="emergency");
    return {cls:"bot emergency", color:"#C0392B", html:
`🚨 <b>This looks urgent — please act now, not through a chatbot.</b>

· Life-threatening → call <b>999</b> immediately.
· Nearest A&amp;E: <b>Queen Mary Hospital</b>, Pokfulam Road.
· On-campus urgent help: approach UHS staff directly, 2/F Meng Wah Complex.\n· UHS numbers: medical 2549 4686 · dental 3917 2510.

${cite(e)}`};
  }
  if(PROOF_RX.test(q)){
    const e = KB.find(x=>x.id==="charter");
    return {cls:"bot refusal", color:"#C2508F", html:
`🚫 <b>Medipal cannot issue or help obtain medical proof for course deadlines or absences.</b>

Per the Patients' Charter, patients <b>should not ask health care providers to provide incorrect information, receipts or certificates</b>. If a legitimate certificate exists, it can only be issued by UHS staff through a real consultation — please book an appointment (web booking / call 2549 4686 / walk in) and discuss with the doctor.

${cite(e)}`};
  }
  if(BOOKME_RX.test(q)){
    const e = KB.find(x=>x.id==="appointment");
    return {cls:"bot refusal", color:"#2E7CD6", html:
`🚫 <b>I can't book, change or cancel appointments for you</b> — bookings must be made by the patient under their own name and number, and cannot be transferred.

Three official ways: <b>① Web booking</b> (UHS Web Appointment System) · <b>② Call 2549 4686</b> · <b>③ Walk in</b> to 2/F Meng Wah Complex.

${cite(e)}`};
  }
  if(SYMPTOM_RX.test(q)){
    const e = KB.find(x=>x.id==="appointment");
    return {cls:"bot refusal", color:"#2E7CD6", html:
`🩺 <b>I'm an information navigator, not a medical service — I can't interpret symptoms or give medical advice.</b>

If you'd like to discuss this with a physician, here's how to reach one:
· <b>Web booking</b> (UHS Web Appointment System)
· Call <b>2549 4686</b>
· Walk in: <b>2/F, Meng Wah Complex</b>

If this feels urgent, see the emergency guidance: <b>999</b> / Queen Mary Hospital A&amp;E.

${cite(e)}`};
  }
  if(HOURS_RX.test(q)){
    const e = KB.find(x=>x.id==="contact");
    return {cls:"bot", color:"#0E9384", html:
`🕒 <b>Opening hours are not included in my fixed corpus.</b>

None of the eight official UHS pages I index states the clinic's opening hours, so I will not guess. Please confirm current hours on the official site (uhs.hku.hk) or by phone at <b>2549 4686</b> before visiting.

${cite(e)}`};
  }
  if(FEES_RX.test(q)){
    const e = KB.find(x=>x.id==="charter");
    return {cls:"bot", color:"#C07A08", html:
`💰 <b>Fee amounts are not included in my fixed corpus.</b>

The corpus confirms that patients must pay all fees and charges as required, but it does not list current consultation fees or which items are free. Please check the official charges page (uhs.hku.hk/medical-charges) or call <b>2549 4686</b> for confirmation.

${cite(e)}`};
  }
  const hit = retrieve(q);
  const rankedList = ranked(q);
  if(hit){
    const e = hit.entry;
    return {cls:"bot", color:e.color, html: e.body.replace(/\n/g,"\n") + cite(e) + topkBox(rankedList)};
  }
  return {cls:"bot", html:
`I checked my fixed corpus (8 official UHS pages — I don't browse the live web) and <b>this content is not in my database</b>, so I won't guess.

<b>Where to inquire instead:</b> uhealth@hku.hk · Medical 2549 4686 · Physiotherapy 3917 2509 · Dental 3917 2510.
Or try one of the topics I do cover: <b>appointments, contacts, emergency services, eligibility, referrals, reimbursements, patients' charter, privacy</b>.`};
}

const CASES = [
 ["Where is the UHS clinic and how do I book an appointment?","ANSWER"],
 ["What is the deadline for reimbursement claims?","ANSWER"],
 ["How long do I have to submit a reimbursement?","ANSWER"],
 ["what are the opening hours of the dental clinic?","NOTFOUND"],
 ["UHS 在哪里？怎么预约？","ANSWER"],
 ["怎么报销？","ANSWER"],
 ["牙科急诊电话是多少？","ANSWER"],
 ["Is consultation free?","NOTFOUND"],
 ["How much does a consultation cost?","NOTFOUND"],
 ["I haven't gotten my influenza vaccine yet","NOTFOUND"],
 ["Can you recommend a doctor for my symptom?","REFUSAL"],
 ["Can you book a visit at the clinic?","REFUSAL"],
 ["Could you make an appointment for me?","REFUSAL"],
 ["帮我预约一下","REFUSAL"],
 ["Write me a sick note for my deadline extension","REFUSAL"],
 ["Can I get a medical certificate for my assignment deadline?","REFUSAL"],
 ["I have a fever","REFUSAL"],
 ["I cut my hand badly and it's bleeding a lot","EMERGENCY"],
 ["我的牙很痛还发烧","EMERGENCY"],
 ["dental emergency with fever and swelling","EMERGENCY"],
 ["What is the phone number for physiotherapy?","ANSWER"],
 ["Can I cancel my friend's appointment?","ANSWER"],
 ["refund","ANSWER"],
 ["toothache","ANSWER"],
 ["privacy policy cookies","ANSWER"],
 ["staff dependents eligibility","ANSWER"],
 ["referral letter specialist","ANSWER"],
 ["patients charter complaint","ANSWER"],
 ["hello","NOTFOUND"],
 ["What is the meaning of life?","NOTFOUND"]
];
let bad=0;
for(const [q,expect] of CASES){
  let kind;
  try{
    const a=answer(q);
    const plain=a.html.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
    const isFallback=plain.includes("this content is not in my database")||plain.includes("not included in my fixed corpus");
    kind = a.cls.includes("emergency")?"EMERGENCY":a.cls.includes("refusal")?"REFUSAL":isFallback?"NOTFOUND":"ANSWER";
  }catch(e){ kind="CRASH"; }
  const ok = kind===expect;
  if(!ok) bad++;
  console.log((ok?"PASS ":"FAIL ")+"| "+q.slice(0,48).padEnd(48)+" | expect "+expect.padEnd(9)+" got "+kind);
}
console.log("---- failures: "+bad+" / "+CASES.length);
