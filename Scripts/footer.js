function loadNavbar() {
    fetch("Components/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer-container").innerHTML = html;
        })
        .catch(error => console.error("Error loading navbar:", error));
}

document.addEventListener("DOMContentLoaded", loadNavbar);
