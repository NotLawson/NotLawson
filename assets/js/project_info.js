var markdown;
var config;
const main_element = document.getElementById("main");


const urlParams = new URLSearchParams(window.location.search);
var project_id = urlParams.get("project");

async function main() {
    await fetch("/projects/projects.json").then(response => response.json()).then(response => config = response.projects[project_id]);
    await fetch(config.longDesc).then(response => response.text()).then(response => markdown = response);
    var converter = new showdown.Converter();
    document.getElementById("longdesc").innerHTML = converter.makeHtml(markdown);
    document.getElementById("version").innerHTML = config.latest;
    document.getElementById("title").innerHTML = config.name;
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
    main_element.removeAttribute("hidden")
    document.get()
}
main()