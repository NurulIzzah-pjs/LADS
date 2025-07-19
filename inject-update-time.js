const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "index.html"); // Change if your HTML is in a subfolder
let html = fs.readFileSync(filePath, "utf8");

const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

html = html.replace("{{LAST_UPDATED}}", today);
fs.writeFileSync(filePath, html);

console.log(`✅ Injected last updated date: ${today}`);
