import displayScores from './displayscores';

const getScores = async (gameId) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
  return response.json();
};
const submitScore = async (gameId, user, score) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score: Number(score) }),
  });
  if (response.ok) {
    const scoresData = await getScores(gameId);
    displayScores(scoresData.result);
  }
};

export { submitScore, getScores };