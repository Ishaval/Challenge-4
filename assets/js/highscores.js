const highscoresList = document.getElementById("highscores-list");
const goBackBtn = document.getElementById("go-back");
const clearScoresBtn = document.getElementById("clear-scores");

displayHighScores();

goBackBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

clearScoresBtn.addEventListener("click", () => {
  localStorage.removeItem("highscores");
  displayHighScores();
});

function displayHighScores() {
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscoresList.innerHTML = "";

  highscores.forEach((score) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${score.initials} - ${score.score}`;
    highscoresList.appendChild(listItem);
  });
}
