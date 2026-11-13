// Plan list - Plan / Billing screen ke liye.
// Kimat yahin badalni hai: monthly_paise me paise me likho (999 rupaye = 99900).
// available:false ka matlab: plan screen par dikhta hai, par abhi kharid nahi sakte ("Jaldi aa raha hai").
// Jab payment aur limit lagani ho tab owner bataye - tab available:true karenge aur server par rok lagayenge.
export const PLANS=[
  {code:'FREE',title:'Free',monthly_paise:0,ai_credits:0,companies:1,team:1,available:true,
   features:['1 company','Invoices, Contacts, Products','Basic reports aur GST breakdown','AI chat (simple sawaal)']},
  {code:'PRO',title:'Pro',monthly_paise:99900,ai_credits:null,companies:3,team:5,available:false,
   features:['3 companies','5 team members','AI chat + bill photo padhna','Saare reports aur Export']},
  {code:'PRO_PLUS',title:'Pro Plus',monthly_paise:199900,ai_credits:null,companies:10,team:20,available:false,
   features:['10 companies','20 team members','AI Business Assistant (full)','Priority support']}
];
export const PLAN_NOTICE='Only FREE is active. Paid plan prices and payment processing need verified provider integration; no fake checkout or subscription activation.';
export const PLAN_NOTICE_HI='अभी सिर्फ़ Free प्लान चालू है। पेड प्लान की कीमत और पेमेंट तभी शुरू होंगे जब असली पेमेंट सेवा जुड़ जाएगी। तब तक कोई नकली चेकआउट नहीं है।';
