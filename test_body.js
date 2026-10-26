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
