// Main Javascript file. Contains helpers and functions for all pages

//// General Helpers

// Sleep Function
async function sleep(ms) {await new Promise(r => setTimeout(r, ms))}

// Shortcuts
document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === 'f') {
        event.preventDefault();
        console.log("opening in file viewer");
        window.location.href = "/file_viewer?file="+window.location.pathname;
    } else if (event.key == "s") {
        SKIP = true;
        setCookie("ftv", "yes");
    }
})

// IP Grabber
var ip;
async function iploader() {await fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => {ip = data.ip;});console.log("Your IP is: "+ip);}
iploader();

// Param Reader
const urlParams = new URLSearchParams(window.location.search);
const debug = urlParams.get('debug');
if (debug==="true") {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/assets/css/debug.css';
    document.head.appendChild(link);
    links = Array.from(document.getElementsByTagName("a"))
    links.forEach(element => {
        element.href = element.href + "?debug=true"
    })
}

// Cookies
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/";
}

// Terminal
const term = document.getElementById("term")

var SKIP;
var ftv = getCookie("ftv-"+location.pathname);
if (ftv==="") {
    SKIP = false;
    setCookie("ftv", "yes")
} else {
    SKIP = true;
}

async function typesleep(ms) {
    if (SKIP===false) {
        await new Promise(r => setTimeout(r, ms));
    } else {
        await new Promise(r => r()); // Skip sleep if SKIP is true
    }
    
}

async function type(string) {
        string = Array.from(string);
        for (let i = 0; i < string.length; i++) {
            if (string[i]==="|") {
                term.appendChild(document.createElement("br"));
            } else {
                term.innerHTML = term.innerHTML + string[i];
            }
            await typesleep(10);
        };
}

async function type_speed(string, speed) {
    string = Array.from(string);
        for (let i = 0; i < string.length; i++) {
            if (string[i]==="|") {
                term.appendChild(document.createElement("br"));
            } else {
                term.innerHTML = term.innerHTML + string[i];
            }
            await typesleep(speed);
        };
}

async function link(link, text) {
    var link_element = document.createElement("a");
    link_element.href = link;
    term.appendChild(link_element);
    for (let i = 0; i < text.length; i++) {
        link_element.innerHTML = link_element.innerHTML + text[i];
        await typesleep(10);
    };
}

async function list(items) {
    var list = document.createElement("ul");
    term.appendChild(list);
    for (let i = 0; i < items.length; i++) {
        var listitem = document.createElement("li");
        list.appendChild(listitem);
        string = Array.from(items[i]);
        for (let i = 0; i < string.length; i++) {
            listitem.innerHTML = listitem.innerHTML + string[i];
            await typesleep(30);
        };
        await typesleep(500)
    };
}

async function heading(text) {
    var heading_element = document.createElement("h1");
    term.appendChild(heading_element);
    for (let i = 0; i < text.length; i++) {
        heading_element.innerHTML = heading_element.innerHTML + text[i];
        await typesleep(10);
    };
}

async function subheading(text) {
    var heading_element = document.createElement("h2");
    term.appendChild(heading_element);
    for (let i = 0; i < text.length; i++) {
        heading_element.innerHTML = heading_element.innerHTML + text[i];
        await typesleep(30);
    };
}