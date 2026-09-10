// =====================================
// SHARED WEBSITE NAVIGATION
// =====================================

const navigation = `
    <nav class="navbar">

        <a href="index.html" class="logo">
            My Website
        </a>

        <ul class="nav-links">
            <li>
                <a href="index.html">Home</a>
            </li>

            <li>
                <a href="about.html">About</a>
            </li>

            <li>
                <a href="projects.html">Projects</a>
            </li>

            <li>
                <a href="contact.html">Contact</a>
            </li>
        </ul>

    </nav>
`;


// Insert navigation into the page
document.getElementById("navbar").innerHTML = navigation;


// =====================================
// ACTIVE PAGE HIGHLIGHT
// =====================================

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});
