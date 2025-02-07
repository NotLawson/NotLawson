const projects_div = document.getElementById("projects");
const example_category = document.getElementById("examplecategory");
const example_item = document.getElementById("exampleitem");
var config;
var categories;
var categories_json;
var projects;

//other
var val;

async function main() {


await fetch("/projects/projects.json").then(response => response.json()).then((responseJSON) => {config = responseJSON;});

categories = config.categories;
categories_json = {};
Object.keys(categories).forEach(function (key) {
    categories_json[key] = [];
})

projects = config.projects;
Object.keys(projects).forEach(function (key) {
    val = projects[key];
    categories_json[val.status].push(key);
})


// create html
Object.keys(categories).forEach(function (key) {
    var cat_config = categories[key];
    var cat_list = categories_json[key];

    var new_category_html = '<div><h2>' + cat_config.friendly + '</h2><ul>'
    
    cat_list.forEach(function (key) {
        var item_config = projects[key];
        var new_item = '<li><a href="/projects/info?project='+key+'">'+item_config.name+'</a></li>'
        new_category_html = new_category_html + new_item
    })
    new_category_html = new_category_html + "</ul></div>"
    document.getElementById("projects");.innerHTML = document.getElementById("projects");.innerHTML + new_category_html
})
};

main();