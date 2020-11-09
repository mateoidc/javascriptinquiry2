var months = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

var month = prompt("Enter a number between 1 and 12");

if (month > 12 || month < 1) {
  alert("Number wasn't between 1 and 12");
} else {
  console.log(`The month corresponding to ${month} is ${months[month - 1]}`);
}
