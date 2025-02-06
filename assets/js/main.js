document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === 'f') {
        event.preventDefault();
        console.log("opening in file viewer");
        window.location.href = "/file_viewer?file="+window.location.pathname;
    }
})