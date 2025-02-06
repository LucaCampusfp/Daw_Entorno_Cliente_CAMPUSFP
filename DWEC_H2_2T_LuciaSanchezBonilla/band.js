document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bandIndex = urlParams.get("band");

    if (bandIndex === null) {
        document.getElementById("bandTitle").textContent = "Banda no encontrada";
        return;
    }

    fetch('music.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const bands = data.getElementsByTagName("band");

        if (bandIndex >= bands.length) {
            document.getElementById("bandTitle").textContent = "Banda no encontrada";
            return;
        }

        const band = bands[bandIndex];
        const bandName = band.getElementsByTagName("name")[0].textContent;
        document.getElementById("bandTitle").textContent = bandName;

        const songList = document.getElementById("songList");
        const songs = band.getElementsByTagName("items");

        Array.from(songs).forEach(song => {
            const songTitle = song.getElementsByTagName("title")[0].textContent;
            const songUrl = song.getElementsByTagName("url")[0].textContent.replace("watch?v=", "embed/");

            const card = document.createElement("div");
            card.classList.add("card", "mt-3");

            const cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header", "bg-info", "text-white");
            cardHeader.textContent = songTitle;

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const iframe = document.createElement("iframe");
            iframe.width = "100%";
            iframe.height = "315";
            iframe.src = songUrl;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            cardBody.appendChild(iframe);
            card.appendChild(cardHeader);
            card.appendChild(cardBody);

            songList.appendChild(card);
        });
    })
    .catch(error => console.error("Error cargando el XML: ", error));
});
