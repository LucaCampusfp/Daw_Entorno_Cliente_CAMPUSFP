document.addEventListener("DOMContentLoaded", function() {
    fetch('music.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const bands = data.getElementsByTagName("band");
        const menu = document.getElementById("bandList");

        Array.from(bands).forEach((band, index) => {
            const bandName = band.getElementsByTagName("name")[0].textContent;

            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");

            const link = document.createElement("a");
            link.href = `band.html?band=${index}`;
            link.textContent = bandName;

            listItem.appendChild(link);
            menu.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error cargando el XML: ", error));
});
