document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === 'f') {
        event.preventDefault();
        console.log("opening in file viewer");
        window.location.href = "/file_viewer?file="+window.location.pathname;
    }
})

const elements = document.querySelectorAll('.ipaddr');
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        ip = data.ip;
        console.log("Your IP is: "+ip);
        for (let i = 0; i < elements.length; i++) {
            elements[i].childNodes[0].innerText = ip;
        }
    });
