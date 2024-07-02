const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    animeNameEl.innerText = "Updating...";
    animeImgEl.src = "spinner.svg";

    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Get Cat";
    animeContainerEl.style.display = "block";
    animeImgEl.src = data[0].url;
    animeNameEl.innerText = "Random Cat";

  } catch (error) {
    console.error(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Cat";
    animeNameEl.innerText = "An error happened, please try again";
  }
});

