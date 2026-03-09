const fs = require('fs');
const file = 'z:/Code/physics-flex/src/components/TwitterPost/NotTwitterPost.js';
const content = fs.readFileSync(file, 'utf8');

const regex = /<p>\r?\n"([\s\S]*?)"\r?\n\s+<\/p>/;
const match = content.match(regex);
if (match) {
    const rawText = match[1];
    const safeText = JSON.stringify(rawText);
    const newContent = content.replace(regex, `<div style={{ whiteSpace: 'pre-wrap' }}>{${safeText}}</div>`);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log("Fixed successfully.");
} else {
    console.log("Match not found!");
}
