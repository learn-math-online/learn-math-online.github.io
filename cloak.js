function insertScript(url, callback) {
    // Create a new script element
    const script = document.createElement('script');
    script.src = `${url}`;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function() {
        if (callback) {
            callback();
        }
    };
    // Append the script element to the head or body
    document.head.appendChild(script);
}
document.addEventListener('DOMContentLoaded', (event) => {
	insertScript("/topubg.js");
});