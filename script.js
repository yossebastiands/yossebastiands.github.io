document.addEventListener("DOMContentLoaded", function() {
    let projects = [
        { name: "Apollo Flight Program", url: "https://patreon.com/ApolloFlightProgram" },
        { name: "My Minigames", url: "https://yosminigames.netlify.app/" },
        { name: "CompFlight - Recommended Learning Materials to Computer Science", url: "https://docs.google.com/spreadsheets/d/1iFqpD9wHf0c_oYRQfcMb3hcj0uULel-LASUyk0lLUyY/edit?usp=sharing" },
    ];
    
    let projectList = document.getElementById("projects-list");
    projects.forEach(project => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = project.url;
        a.innerText = project.name;
        a.target = "_blank";
        li.appendChild(a);
        projectList.appendChild(li);
    });
    
    let darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});


