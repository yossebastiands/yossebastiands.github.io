document.addEventListener("DOMContentLoaded", function() {
    let projects = [
        { name: "Apollo Flight Program", url: "https://patreon.com/ApolloFlightProgram" },
        { name: "My Minigames", url: "https://github.com/yossebastiands/study-summarizer" },
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
