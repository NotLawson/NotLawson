async function typing_animation() {
    await heading("Assets");
    await typesleep(500);
    await type("This page is a collection of assets that I have created or used in this website.|");
    await type("It includes images, icons, and other media that I have found useful.|");
    await type("Feel free to use them in your own projects, but please give credit where credit is due.|");
    await typesleep(500);
    await type("If you have any questions or suggestions, feel free to contact me.|");
    await typesleep(500);
    document.getElementById("assets").classList.remove("invisible");
    document.getElementById("assets").classList.add("visible");
}

async function load_assets() {
    await fetch("/assets/assets.json")
        .then(response => response.json())
        .then(data => {
            data.js.forEach(element => {
                var section = document.createElement("code");
                section.classList.add("item");
                var heading = document.createElement("h3");
                var path = document.createElement("a");
                path.href = "/file_viewer/?file=" + element.path;
                path.innerHTML = element.name;
                heading.appendChild(path);
                var type = document.createElement("kbd");
                type.innerHTML = element.type;
                var description = document.createElement("p");
                description.innerHTML = element.desc;
                section.appendChild(heading);
                section.appendChild(type);
                section.appendChild(description);
                document.getElementById("assets").appendChild(section);
            });

            data.css.forEach(element => {
                var section = document.createElement("code");
                section.classList.add("item");
                var heading = document.createElement("h3");
                var path = document.createElement("a");
                path.href = "/file_viewer/?file=" + element.path;
                path.innerHTML = element.name;
                heading.appendChild(path);
                var type = document.createElement("kbd");
                type.innerHTML = element.type;
                var description = document.createElement("p");
                description.innerHTML = element.desc;
                section.appendChild(heading);
                section.appendChild(type);
                section.appendChild(description);
                document.getElementById("assets").appendChild(section);
            });

            data.other.forEach(element => {
                var section = document.createElement("code");
                section.classList.add("item");
                var heading = document.createElement("h3");
                var path = document.createElement("a");
                path.href = "/file_viewer/?file=" + element.path;
                path.innerHTML = element.name;
                heading.appendChild(path);
                var type = document.createElement("kbd");
                type.innerHTML = element.type;
                var description = document.createElement("p");
                description.innerHTML = element.desc;
                section.appendChild(heading);
                section.appendChild(type);
                section.appendChild(description);
                document.getElementById("assets").appendChild(section);
            });
        });
}
load_assets();
typing_animation();


