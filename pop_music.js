document.getElementById("load-music").addEventListener("click", () => {
    const musicContainer = document.getElementById("music-container");
    const musicElement = document.getElementById("music-element");
    const songTitle = document.getElementById("song-title");
    const script = document.createElement("script");
    script.src =
      "https://api.deezer.com/chart?output=jsonp&callback=handleDeezerResponse";
    document.body.appendChild(script);
    
});

function handleDeezerResponse(data) {
    try {
        if (!data.tracks || !data.tracks.data || data.tracks.data.length === 0) {
          throw new Error("Не вдалося знайти пісню");
        }
    
        const randomSong =
          data.tracks.data[Math.floor(Math.random() * data.tracks.data.length)];
    
        if (!randomSong.preview) {
          throw new Error("Аудіо-прев'ю не знайдено");
        }
    
        const musicElement = document.getElementById("music-element");
        const songTitle = document.getElementById("song-title");
    
        musicElement.src = randomSong.preview;
        songTitle.textContent = `${randomSong.artist.name} - ${randomSong.title}`;
        musicElement.style.display = "block";
      } catch (error) {
        console.error("Сталася помилка:", error);
        document.getElementById("music-container").innerHTML =
          "<p>Не вдалося завантажити пісню. Спробуй ще раз!</p>";
      }
}