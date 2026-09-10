/* =========================================
   SHARED NAVIGATION
========================================= */

const navigationHTML = `
    <nav class="primary-nav">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="experience.html">Experience</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>

    <nav class="secondary-nav">
        <ul>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
        </ul>
    </nav>
`;


/* Insert navigation into every page */

const navigationContainer =
    document.getElementById("navigation");

if (navigationContainer) {
    navigationContainer.innerHTML = navigationHTML;
}


/* =========================================
   ACTIVE PAGE
========================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navigationLinks =
    document.querySelectorAll(".primary-nav a, .secondary-nav a");

navigationLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});
