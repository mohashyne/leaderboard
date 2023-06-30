import './styles/main.scss';
import displayScores from './modules/displayscores';
import { submitScore, getScores } from './modules/api';

const main = async () => {
  const gameId = '0dbbI875CtNkbki3cyiL';

  const scoresData = await getScores(gameId);
  displayScores(scoresData.result);

  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    const name = nameInput.value;
    const score = parseInt(scoreInput.value, 10);

    await submitScore(gameId, name, score);
    nameInput.value = '';
    scoreInput.value = '';
    const newScoreData = await getScores(gameId);
    displayScores(newScoreData.result);
  });

  const refreshButton = document.getElementById('refresh-btn');
  refreshButton.addEventListener('click', async () => {
    const scoresData = await getScores(gameId);
    displayScores(scoresData.result);
  });
};

main();