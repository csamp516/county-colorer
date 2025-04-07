const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const converter = require("json-2-csv");

const file = fs.readFileSync("./Usa_counties_large.svg", "utf8");
const { window } = new JSDOM(file);

const output = [];
window.document.querySelectorAll("title").forEach((item) => {
  const title = item.innerHTML;
  output.push({ county: title, color: "" });
});

const csv = converter.json2csv(output, (err, csv) => {
  if (err) {
    throw err;
  }
});

fs.writeFileSync("counties.csv", csv);
console.log("CSV file created successfully.");
