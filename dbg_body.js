const q="Can my daughter be seen without me present?";
KB.forEach(e=>{const r=scoreEntry(q,e); if(r.score>0) console.log(e.id, JSON.stringify(r));});
console.log("norm:", JSON.stringify(norm(q)));
