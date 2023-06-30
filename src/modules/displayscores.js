const displayScores = (scores) => {
  const scoreContainer = document.querySelector('.score-container');
  scoreContainer.innerHTML = '';
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user}: ${score.score}`;
    scoreContainer.appendChild(li);
  });
};

export default displayScores;