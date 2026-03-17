import fs from "node:fs";
import path from "node:path";
import * as sass from "sass";

const inputPath = path.resolve("src/styles/main.scss");
const outputPath = path.resolve("dist/styles.css");

const result = sass.compile(inputPath, {
  style: "compressed",
});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, result.css);

console.log("Built SCSS → CSS:", outputPath);
