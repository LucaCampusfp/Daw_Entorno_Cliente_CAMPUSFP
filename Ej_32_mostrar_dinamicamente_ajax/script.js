document.addEventListener("DOMContentLoaded", function () {
    fetch("libros.xml")
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(xml => {
            let books = xml.getElementsByTagName("book");
            let container = document.getElementById("libros-container");

            for (let i = 0; i < books.length; i++) {
                let title = books[i].getElementsByTagName("title")[0].textContent;
                let author = books[i].getElementsByTagName("author")[0].textContent;
                let year = books[i].getElementsByTagName("year")[0].textContent;
                
                let section = document.createElement("div");
                section.classList.add("card", "my-3");
                section.innerHTML = 
                    `<div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text"><strong>Autor:</strong> ${author}</p>
                        <p class="card-text"><strong>Año:</strong> ${year}</p>
                    </div>`;
                
                container.appendChild(section);
            }
        })
        .catch(error => console.log("Error al cargar el archivo XML:", error));
});
