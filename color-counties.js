const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const csvFilePath = "./counties.csv";
const csv = require("csvtojson");
const file = fs.readFileSync("./Usa_counties_large.svg", "utf8");
const { window } = new JSDOM(file);

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);

    window.document.querySelectorAll("title").forEach((item) => {
      const title = item.innerHTML;
      const parent = item.parentElement;
      const color =
        jsonObj.find((item) => item.county === title).color ||
        generateRandomHexColor();
      parent.setAttribute("fill", color);
    });
    fs.writeFileSync(
      "colored-counties.svg",
      window.document.documentElement.outerHTML
    );
  });

const generateRandomHexColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
};
