const fs = require("fs");
const csvFilePath = "./counties.csv";
const csv = require("csvtojson");

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
    let css = "";
    jsonObj.forEach((item) => {
      if (!item.color) return;
      css += `#${item.id} { fill: ${item.color}; }\n`;
    });

    fs.writeFileSync("counties.css", css);
  });
