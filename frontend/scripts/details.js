addEventListener('DOMContentLoaded', async function(){
    const urlParam = new URLSearchParams(window.location.search);
    const songID = urlParam.get("id");
    const response = await fetch(`http://localhost:3000/api/songs/${songID}`);
    const song = await response.json();

    let heading = "";
    heading += `${song.title}`;
    document.querySelector("h1").innerHTML = heading;

    let html = "";
    html += `
        <h3>Artist: ${song.artist}</h3>
        <p>Popularity: ${song.popularity}</p>
        <p>Release Date: ${song.releaseDate}</p>
    `;

    document.querySelector("div").innerHTML = html;
});