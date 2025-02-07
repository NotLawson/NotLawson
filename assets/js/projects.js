const projects_div = document.getElementById("projects");
const example_category = document.getElementById("examplecategory");
const example_item = document.getElementById("exampleitem");
var config;
var categories;
var categories_json;
var projects;

async function main() {


await fetch("/projects/projects.json").then(response => response.json()).then((responseJSON) => {config = responseJSON;});

categories = config.categories;
categories_json = {};
Object.keys(categories).forEach(function (key) {
    categories_json[key] = [];
})

projects = config.projects;
Object.keys(projects).forEach(function (key) {
    var val = projects[key];
    categories_json[val.category].push(key);
})


// create html
Object.keys(categories).forEach(function (key) {
    var cat_config = categories[key];
    var cat_list = categories_json[key];

    var new_category = example_category.cloneNode("true");
    new_category.removeAttribute("hidden");
    new_category.childNodes[0].innerHTML = val.friendly;
    
    cat_list.forEach(function (key) {
        var item_config = projects[key];
        var new_item = example_item.cloneNode(true);
        new_item.childNodes[0].setAttribute("href", "/projects/info?project="+key)
        new_item.childNodes.innerHTML = item_config.name
        new_category.appendChild(new_item)
    })
    projects_div.appendChild(new_category)

})
}