document.getElementById("load-video").addEventListener("click", async () => {
    const videoContainer = document.getElementById("video-container");
  const videoElement = document.getElementById("video-element");
  try {
    const response = await fetch("https://random.dog/woof.json");
    if (!response.ok) {
      throw new Error("Помилка отримання відео");
    }
    const data = await response.json();


    if (!data.url.endsWith(".mp4")) {
      return document.getElementById("load-video").click(); 
    }

    videoElement.src = data.url;
    videoElement.style.display = "block";
  } catch (error) {
    console.error("Сталася помилка:", error);
    videoContainer.innerHTML =
      "<p>Не вдалося завантажити відео. Спробуй ще раз!</p>";
  }
});
