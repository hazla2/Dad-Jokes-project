const jokes = document.querySelector("#joke");
const getJokeBtn = document.querySelector("#jokeBtn");
const copyJokeBtn = document.querySelector("#copyBtn");

const getJoke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
        "User-Agent": "Your User Agent",
      },
    });

    const data = await response.json();
    const joke = data.joke;
    jokes.textContent = joke;
  } catch (error) {
    console.error("Error:", error);
  }
};
getJoke();

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(jokes.textContent);
  } catch (error) {
    console.error("Error:", error);
  }
};

copyJokeBtn.addEventListener("click", copyContent);

copyJokeBtn.addEventListener("click", () => {
  const popUp = document.querySelector(".pop-up");
  popUp.classList.add("active");
  console.log("copied");
  setTimeout(() => {
    popUp.classList.remove("active");
    popUp.classList.remove("exit");
  }, 2000);

  setTimeout(() => {
    popUp.classList.add("exit");
    console.log("exiting");
  }, 1500);
});

getJokeBtn.addEventListener("click", getJoke);
