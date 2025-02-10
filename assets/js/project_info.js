var converter = new showdown.Converter()
var markdown;
var config;
const main_element = document.getElementById("main");


const urlParams = new URLSearchParams(window.location.search);
var project_id = urlParams.get("project");

async function main() {
    await fetch("/projects/projects.json").then(response => response.json()).then(response => config = response);
    await fetch(config.longDesc).then(response => response.text()).then(response => markdown = response);

    document.getElementById("longdesc").innerHTML = converter.makehtml(markdown);
    document.getElementById("version").innerHTML = config.version;
    if (config.git === "none") {
        document.getElementById("gh").setAttribute("hidden", "")
    } else {
        document.getElementById("gh").setAttribute("href", config.git);
    }

    if (config.website === "none") {
        document.getElementById("web").setAttribute("hidden", "")
    } else {
        document.getElementById("web").setAttribute("href", config.website);
    }
}
main()