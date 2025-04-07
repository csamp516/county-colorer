const fs = require("fs");
const csvFilePath = "./counties.csv";
const csv = require("csvtojson");
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const file = fs.readFileSync("./Usa_counties_large.svg", "utf8");
// const { window } = new JSDOM(file);
let css = "";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
    jsonObj.forEach((item) => {
      if (!item.color) return;
      css += `#${item.id} { fill: ${item.color}; }\n`;
    });

    fs.writeFileSync("counties.css", css);
    // window.document.querySelector("style").innerHTML += css;
    // fs.writeFileSync(
    //   "colored-counties.svg",
    //   window.document.documentElement.outerHTML
    // );
  });
