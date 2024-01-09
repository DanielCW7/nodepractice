// breaking down the URL into readable parts

const url = require('url');
const address = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(address, true);

console.log(q.host); // localhost:8080
console.log(q.pathname); // /default.htm
console.log(q.search); // ?year=2017&month=february

const qdata = q.query;
console.log(qdata.month) // february
console.log(qdata) // { year: '2017', month: 'february' }