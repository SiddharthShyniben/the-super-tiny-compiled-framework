import { parse } from "./the-super-tiny-compiler-framework.js";
import { writeFileSync } from "node:fs";

const parsed = parse(`

<script>
let count = 0;
let style = "color: rgb(" + count + ", 0, 0)";

function increment() {
count += 1
}
</script>

<button onclick="increment()" {style}>You've clicked me {count} times</button>
`);

writeFileSync("index.html", parsed.HTML);
writeFileSync("style.css", parsed.CSS);
writeFileSync("main.js", parsed.JS);
console.log(parsed.CSS);
console.log(parsed.JS);
