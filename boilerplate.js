const fs = require('fs');
const folderName = process.argv[2] || 'Project';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>`;

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,html);
    fs.writeFileSync(`${folderName}/app.js`,"");
    fs.writeFileSync(`${folderName}/app.css`,"");
} catch (e){
    console.log("SOMETHING WENT WRONG!!");
    console.log(e);
}