document.getElementById("load-meme").addEventListener("click", async () => {
  const memeContainer = document.getElementById("meme-container");
  const memeImage = document.getElementById("meme-image");
  try {
    const response = await fetch("https://meme-api.com/gimme");
    if (!response.ok) {
      throw new Error("Помилка отримання мемчика");
    }
    const data = await response.json();

    memeImage.src = data.url;
    memeImage.style.display = "block";
  } catch (error) {
    console.error("Сталася помилка:", error);
    memeContainer.innerHTML =
      "<p>Не вдалося завантажити мем. Спробуй ще раз!</p>";
  }
});
