// APNA BUSINESS - sidebar modules aur chart helpers.
// Ye file app.js se PEHLE load hoti hai. Isme sirf data aur SVG banane wale functions hain.
// Target ke matlab:
//   p:<page>            -> app.js ka page khulta hai
//   p:contacts:CUSTOMER -> contacts page, filter ke saath
//   ai:<sawaal>         -> AI chat khulti hai aur sawaal apne aap bhejta hai
//   act:<kaam>          -> createCompany / switchCompany / settings:<tab>
//   soon                -> feature abhi bana nahi hai (jhoothi screen nahi dikhate)
const NAV_MODULES = [
  { n: '01', title: 'Dashboard', icon: '📊', items: [
    ['Business Overview', 'p:dashboard'], ['Sales Overview', 'p:sales-overview'],
    ['Revenue & Profit', 'p:revenue-profit'], ['Business Activities', 'p:activities'] ] },
  { n: '02', title: 'CRM & Customers', icon: '🤝', items: [
    ['Leads', 'soon'], ['Customers', 'p:contacts:CUSTOMER'], ['Contacts', 'p:contacts'],
    ['Companies', 'soon'], ['Suppliers', 'p:contacts:SUPPLIER'], ['Follow-ups', 'p:reminders'],
    ['Customer Groups', 'soon'] ] },
  { n: '03', title: 'Sales & Orders', icon: '🧾', items: [
    ['Sales Overview', 'p:sales-overview'], ['Quotations', 'soon'], ['Sales Orders', 'soon'],
    ['Invoices', 'p:invoices'], ['Payments', 'p:invoices'], ['Sales Returns', 'p:returns'],
    ['Sales Team', 'soon'], ['Commissions', 'soon'] ] },
  { n: '04', title: 'Purchases & Vendors', icon: '🛒', items: [
    ['Purchase Orders', 'soon'], ['Vendors', 'p:contacts:SUPPLIER'], ['Purchase Bills', 'p:invoices'],
    ['Supplier Payments', 'p:invoices'], ['Purchase Returns', 'p:returns'] ] },
  { n: '05', title: 'Products & Inventory', icon: '📦', items: [
    ['All Products', 'p:products'], ['Categories', 'soon'], ['Stock Overview', 'p:stock'],
    ['Warehouses', 'soon'], ['Stock Transfer', 'soon'], ['Low Stock', 'p:stock:low'],
    ['Barcode', 'soon'], ['Stock Adjustments', 'soon'] ] },
  { n: '06', title: 'Finance & Accounting', icon: '💰', items: [
    ['Accounts Overview', 'p:accounts'], ['Income', 'p:revenue-profit'], ['Expenses', 'p:revenue-profit'],
    ['Cash & Bank', 'p:cash-bank'], ['Journal Entries', 'p:vouchers'], ['Ledger', 'p:accounts'],
    ['Balance Sheet', 'p:balance-sheet'], ['Profit & Loss', 'p:reports'], ['Cash Flow', 'soon'],
    ['GST & Tax', 'p:gst'], ['Financial Reports', 'p:reports'] ] },
  { n: '07', title: 'Banking & Payments', icon: '🏦', items: [
    ['Bank Accounts', 'p:cash-bank'], ['Transactions', 'p:vouchers'], ['Payment Gateway', 'soon'],
    ['Payment Links', 'soon'], ['Reconciliation', 'soon'], ['Payment History', 'p:invoices'] ] },
  { n: '08', title: 'Marketing & Growth', icon: '📣', items: [
    ['Campaigns', 'soon'], ['Email Marketing', 'soon'], ['Social Media', 'soon'],
    ['Marketing Automation', 'soon'], ['Website', 'soon'], ['Landing Pages', 'soon'], ['SEO', 'soon'],
    ['Surveys', 'soon'], ['Promotions', 'soon'] ] },
  { n: '09', title: 'E-Commerce', icon: '🛍️', items: [
    ['Online Store', 'soon'], ['Store Orders', 'soon'], ['Shopping Cart', 'soon'], ['Customers', 'p:contacts:CUSTOMER'],
    ['Coupons', 'soon'], ['Subscriptions', 'soon'], ['Shipping & Delivery', 'soon'], ['Returns', 'p:returns'] ] },
  { n: '10', title: 'Customer Support', icon: '🎧', items: [
    ['Support Dashboard', 'soon'], ['All Tickets', 'soon'], ['Open Tickets', 'soon'], ['Live Chat', 'soon'],
    ['Complaints', 'soon'], ['Knowledge Base', 'soon'], ['Feedback', 'soon'], ['Support Reports', 'soon'] ] },
  { n: '11', title: 'HR & Employees', icon: '👥', items: [
    ['Employees', 'soon'], ['Departments', 'soon'], ['Attendance', 'soon'], ['Leave Management', 'soon'],
    ['Recruitment', 'soon'], ['Onboarding', 'soon'], ['Payroll', 'soon'], ['Performance', 'soon'], ['Training', 'soon'] ] },
  { n: '12', title: 'Projects & Tasks', icon: '🗂️', items: [
    ['All Projects', 'soon'], ['My Projects', 'soon'], ['Tasks', 'soon'], ['Kanban Board', 'soon'],
    ['Milestones', 'soon'], ['Timesheets', 'soon'], ['Team Work', 'soon'], ['Deadlines', 'soon'] ] },
  { n: '13', title: 'Bookings & Events', icon: '📅', items: [
    ['Appointments', 'soon'], ['Bookings', 'soon'], ['Calendar', 'soon'], ['Services', 'soon'],
    ['Events', 'soon'], ['Registrations', 'soon'], ['Tickets', 'soon'] ] },
  { n: '14', title: 'Legal & Contracts', icon: '⚖️', items: [
    ['Contracts', 'soon'], ['Agreements', 'soon'], ['Documents', 'p:documents'], ['Digital Signatures', 'soon'],
    ['Approvals', 'p:drafts'], ['Renewals', 'soon'] ] },
  { n: '15', title: 'Communication & Workspace', icon: '💬', items: [
    ['Business Mail', 'soon'], ['Team Chat', 'soon'], ['Video Meetings', 'soon'], ['Calendar', 'soon'],
    ['Documents', 'p:documents'], ['Spreadsheets', 'soon'], ['File Manager', 'p:documents'], ['Notes', 'soon'], ['Tasks', 'soon'] ] },
  { n: '16', title: 'AI Business Assistant', icon: '✨', items: [
    ['AI Chat', 'p:chat'],
    ['Business Questions', 'ai:Mere business ka haal batao: sales, purchases, profit, cash aur udhar.'],
    ['Sales Insights', 'ai:Meri sales ka analysis karo aur batao kya behtar ho sakta hai.'],
    ['Financial Insights', 'ai:Meri financial position (profit, cash, receivables, payables) samjhao.'],
    ['Report Generator', 'ai:Ek chhota business report banao: sales, purchases, profit, stock aur GST.'],
    ['Document Assistant', 'ai:Mujhe bill ya document ke baare mein madad chahiye. Main file attach karunga.'],
    ['AI Recommendations', 'ai:Mere data ko dekh kar 5 sujhav do jisse business badhe.'] ] },
  { n: '17', title: 'Automation & Workflows', icon: '⚙️', items: [
    ['Workflow Builder', 'soon'], ['Automation Rules', 'soon'], ['Approval Flows', 'p:drafts'],
    ['Notifications', 'p:reminders'], ['Scheduled Tasks', 'soon'], ['App Integrations', 'soon'], ['API Management', 'soon'] ] },
  { n: '18', title: 'Reports & Analytics', icon: '📈', items: [
    ['Business Reports', 'p:reports'], ['Sales Reports', 'p:sales-overview'], ['Finance Reports', 'p:reports'],
    ['GST Reports', 'p:gst'], ['Inventory Reports', 'p:stock'], ['HR Reports', 'soon'],
    ['Marketing Reports', 'soon'], ['Custom Reports', 'soon'], ['Export Data', 'p:export'] ] },
  { n: '19', title: 'Global Business & Branches', icon: '🌍', items: [
    ['Countries & Regions', 'soon'], ['Branches', 'soon'], ['Business Units', 'soon'], ['Multi-Currency', 'soon'],
    ['Exchange Rates', 'soon'], ['Regional Tax Settings', 'act:settings:profile'], ['Time Zones', 'soon'],
    ['Localization', 'act:settings:general'] ] },
  { n: '20', title: 'Administration & Settings', icon: '🛠️', items: [
    ['Company Profile', 'act:settings:profile'], ['Create Company', 'act:createCompany'],
    ['Switch Company', 'act:switchCompany'], ['Users & Roles', 'p:members'], ['Permissions', 'p:members'],
    ['Security', 'act:settings:account'], ['Subscription & Billing', 'p:plans'], ['Audit Logs', 'soon'] ] }
];

// ---------- chart helpers (inline SVG, theme ke rang CSS variables se) ----------
const CH = { teal: '#1fa49a', blue: '#2f6fed', orange: '#f59e0b', purple: '#8b5cf6', red: '#ef4444', green: '#22c55e', grey: '#94a3b8' };
const CH_LIST = [CH.teal, CH.blue, CH.orange, CH.purple, CH.red, CH.green];

function chShort(paise) {
  const r = Math.abs(Number(paise || 0)) / 100, s = Number(paise) < 0 ? '-' : '';
  if (r >= 1e7) return `${s}₹${(r / 1e7).toFixed(2)}Cr`;
  if (r >= 1e5) return `${s}₹${(r / 1e5).toFixed(2)}L`;
  if (r >= 1e3) return `${s}₹${(r / 1e3).toFixed(1)}K`;
  return `${s}₹${Math.round(r)}`;
}
function chEsc(v) { return String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function chEmpty(msg) { return `<div class="ch-empty">${chEsc(msg || 'Abhi data nahi hai')}</div>`; }
const CH_TXT = 'style="fill:var(--muted);font-size:11px"';

// Grouped bar chart. series: [{name,color,values:[paise...]}]
function chBars(labels, series) {
  const all = series.flatMap(s => s.values);
  if (!all.some(v => v > 0)) return chEmpty('Is mahine tak koi sales/purchase nahi hai');
  const W = 560, H = 230, L = 52, B = 26, T = 12, R = 8, max = Math.max(...all, 1);
  const iw = W - L - R, ih = H - T - B, gw = iw / labels.length, bw = Math.min(26, (gw - 10) / series.length);
  let g = '';
  for (let i = 0; i <= 4; i++) {
    const y = T + ih - (ih * i) / 4;
    g += `<line x1="${L}" x2="${W - R}" y1="${y}" y2="${y}" style="stroke:var(--border)"/><text x="${L - 6}" y="${y + 4}" text-anchor="end" ${CH_TXT}>${chShort((max * i) / 4)}</text>`;
  }
  labels.forEach((lb, i) => {
    const x0 = L + gw * i + (gw - bw * series.length) / 2;
    series.forEach((s, k) => {
      const h = (s.values[i] / max) * ih;
      g += `<rect x="${x0 + bw * k}" y="${T + ih - h}" width="${bw - 3}" height="${Math.max(h, 0)}" rx="4" fill="${s.color}"><title>${chEsc(s.name)} ${chEsc(lb)}: ${chShort(s.values[i])}</title></rect>`;
    });
    g += `<text x="${L + gw * i + gw / 2}" y="${H - 8}" text-anchor="middle" ${CH_TXT}>${chEsc(lb)}</text>`;
  });
  const legend = series.map(s => `<span class="ch-leg"><i style="background:${s.color}"></i>${chEsc(s.name)}</span>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" class="ch-svg" role="img">${g}</svg><div class="ch-legend">${legend}</div>`;
}

// Area/line chart for one series
function chLine(labels, values, color = CH.teal) {
  if (!values.some(v => v > 0)) return chEmpty('Sales ka trend tab dikhega jab invoice bante jayenge');
  const W = 560, H = 230, L = 52, B = 26, T = 12, R = 12, max = Math.max(...values, 1);
  const iw = W - L - R, ih = H - T - B, n = values.length;
  const px = i => L + (n === 1 ? iw / 2 : (iw * i) / (n - 1)), py = v => T + ih - (v / max) * ih;
  let g = '';
  for (let i = 0; i <= 4; i++) {
    const y = T + ih - (ih * i) / 4;
    g += `<line x1="${L}" x2="${W - R}" y1="${y}" y2="${y}" style="stroke:var(--border)"/><text x="${L - 6}" y="${y + 4}" text-anchor="end" ${CH_TXT}>${chShort((max * i) / 4)}</text>`;
  }
  const pts = values.map((v, i) => `${px(i)},${py(v)}`);
  const area = `M${px(0)},${T + ih} L${pts.join(' L')} L${px(n - 1)},${T + ih} Z`;
  g += `<path d="${area}" fill="${color}" opacity=".15"/><polyline points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"/>`;
  values.forEach((v, i) => { g += `<circle cx="${px(i)}" cy="${py(v)}" r="3.5" fill="${color}"><title>${chEsc(labels[i])}: ${chShort(v)}</title></circle><text x="${px(i)}" y="${H - 8}" text-anchor="middle" ${CH_TXT}>${chEsc(labels[i])}</text>`; });
  return `<svg viewBox="0 0 ${W} ${H}" class="ch-svg" role="img">${g}</svg>`;
}

// Donut. items: [{label,value,color}]
function chDonut(items, centerLabel, centerValue) {
  const data = items.filter(x => x.value > 0), total = data.reduce((s, x) => s + x.value, 0);
  if (!total) return chEmpty();
  const R = 62, C = 2 * Math.PI * R;
  let off = 0, arcs = '';
  data.forEach((x, i) => {
    const len = (x.value / total) * C, col = x.color || CH_LIST[i % CH_LIST.length];
    arcs += `<circle r="${R}" cx="90" cy="90" fill="none" stroke="${col}" stroke-width="26" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}" transform="rotate(-90 90 90)"><title>${chEsc(x.label)}: ${chShort(x.value)}</title></circle>`;
    off += len;
  });
  const legend = data.map((x, i) => `<div class="ch-row"><i style="background:${x.color || CH_LIST[i % CH_LIST.length]}"></i><span>${chEsc(x.label)}</span><b>${Math.round((x.value / total) * 100)}%</b></div>`).join('');
  return `<div class="ch-donut"><svg viewBox="0 0 180 180" class="ch-svg-s" role="img">${arcs}<text x="90" y="86" text-anchor="middle" ${CH_TXT}>${chEsc(centerLabel || '')}</text><text x="90" y="104" text-anchor="middle" style="fill:var(--text);font-size:15px;font-weight:700">${chEsc(centerValue || chShort(total))}</text></svg><div class="ch-side">${legend}</div></div>`;
}

// Horizontal bars. items: [{label,value}]
function chHBars(items, color = CH.teal) {
  const data = items.filter(x => x.value > 0);
  if (!data.length) return chEmpty();
  const max = Math.max(...data.map(x => x.value));
  return `<div class="ch-h">${data.map(x => `<div class="ch-hr"><span class="ch-hl" title="${chEsc(x.label)}">${chEsc(x.label)}</span><div class="ch-ht"><div class="ch-hb" style="width:${Math.max(3, (x.value / max) * 100)}%;background:${color}"></div></div><b>${chShort(x.value)}</b></div>`).join('')}</div>`;
}
