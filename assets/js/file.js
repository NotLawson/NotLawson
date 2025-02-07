const code_block = document.getElementById('code');

const urlParams = new URLSearchParams(window.location.search);
const file_path = urlParams.get('file');

async function setBlock() {
const file = await fetch(file_path)
    .then(response => response.text())
    await new Promise(r => setTimeout(r, 100));

code_block.textContent = file;
console.log(file);
};
setBlock();
document.getElementById('filepath').innerHTML = "# File path: "+file_path;