document.addEventListener("DOMContentLoaded", function () {
    fetch("bandas.xml")
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(xml => {
            let bands = xml.getElementsByTagName("band");
            let menu = document.getElementById("menu");
            let content = document.getElementById("content");
            let buttonsContainer = document.getElementById("buttons-container");

            for (let i = 0; i < bands.length; i++) {
                let bandName = bands[i].getElementsByTagName("name")[0].textContent;
                let menuItem = document.createElement("div");
                menuItem.classList.add("nav-link", "band-item");
                menuItem.textContent = bandName;
                menuItem.style.cursor = "pointer";
                menuItem.addEventListener("click", function () {
                    window.location.href = `detalles.html?band=${encodeURIComponent(bandName)}`;
                });
                let songList = document.createElement("div");
                songList.classList.add("band-songs");
                let songs = bands[i].getElementsByTagName("items");
                
                for (let j = 0; j < songs.length; j++) {
                    let title = songs[j].getElementsByTagName("title")[0].textContent;
                    songList.innerHTML += `<p>${title}</p>`;
                }
                menuItem.appendChild(songList);
                menu.appendChild(menuItem);
                
                let section = document.createElement("div");
                section.classList.add("mt-4");
                section.id = `band-${i}`;
                section.innerHTML = `<h2>${bandName}</h2>`;
                
                for (let j = 0; j < songs.length; j++) {
                    let title = songs[j].getElementsByTagName("title")[0].textContent;
                    let url = songs[j].getElementsByTagName("url")[0].textContent;
                    section.innerHTML += 
                        `<div class="card my-3">
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <iframe width="100%" height="315" src="${url.replace("watch?v=", "embed/")}" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>`;
                }

                content.appendChild(section);

                // Crear y agregar botones para cada banda
                let button = document.createElement("button");
                button.classList.add("btn", "btn-primary", "mx-1");
                button.textContent = `Ir a ${bandName}`;
                button.addEventListener("click", function () {
                    document.getElementById(`band-${i}`).scrollIntoView({ behavior: 'smooth' });
                });
                buttonsContainer.appendChild(button);
            }
        });
});
