import * as fs from 'fs';
const loadTokens = (filePath) => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};
const tokens = loadTokens("./src/token_list.json");
console.log(tokens);
