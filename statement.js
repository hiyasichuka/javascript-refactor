import createStatementData from './createStatementData.js';

var invoices = require('./invoices.json');
var invoice = invoices[0];
var plays = require('./plays.json');

console.log(htmlStatement(invoice, plays));


function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}
function renderHtml(data) {
  let result = '<h1>Statement for ${data.customer}</h1>\n';
  result += "<table>\n";
  result += "<tr><th>play</th><th>seats</th><th>costs</th></tr>";
  for (let perf of data.performances) {
    result += ``;
    result += ``;
  }
  result += "";
  result += '';
  result += '';
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(aNumber / 100);
}
