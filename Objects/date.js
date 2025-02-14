// Ver diferentes tipos de Date en developer.mozilla.org

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);
console.log(now);
const formattedDay = now.toLocaleDateString('en-US');
now.setFullYear(2017);
