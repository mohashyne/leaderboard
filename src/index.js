import './styles/main.scss';
import displayScores from './Modules/displayscores.js';
import { createGame, submitScore, getScores } from './Modules/api.js';

const main = async () => {
    const gameId = localStorage.getItem('gameId');
    if (!gameId) {
        const gameData = await createGame('KungfuPanda');
        const [, , gameId] = gameData.result.split(' ');
        localStorage.setItem('gameId', gameId);
    }
    const scoresData = await getScores(gameId);
    displayScores(scoresData.result);

    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const scoreInput = document.getElementById('score-value');
        const name = nameInput.value;
        const score = scoreInput.value;

        if (name && score) {
            await submitScore(gameId, name, score);
            nameInput.value = '';
            scoreInput.value = '';
            const newScoreData = await getScores(gameId);
            displayScores(newScoreData.result);
        }
    });

    const refreshButton = document.getElementById('refresh-btn');
    refreshButton.addEventListener('click', async () => {
        const scoresData = await getScores(gameId);
        displayScores(scoresData.result);
    });
};

main();