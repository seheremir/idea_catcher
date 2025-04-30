document.getElementById("projectForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun default gönderimini engeller

    const name = document.getElementById("name").value;
    const projectTitle = document.getElementById("projectTitle").value;
    const description = document.getElementById("description").value;
    const skillsNeeded = document.getElementById("skillsNeeded").value;

    const projectData = {
        name: name,
        projectTitle: projectTitle,
        description: description,
        skillsNeeded: skillsNeeded
    };

    fetch("https://seheremir.app.n8n.cloud/webhook-test/idea_catcher", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(projectData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Proje başarıyla gönderildi!");
        // Formu temizle
        document.getElementById("projectForm").reset();
    })
    .catch(error => {
        console.error("Hata oluştu:", error);
        alert("Proje gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    });
});
