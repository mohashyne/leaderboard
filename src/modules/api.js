import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";
import displayScores from "./displayscores";

const createGame = async (name) => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });
    return response.json();
};

const submitScore = async (gameId, user, score) => {
  const response =  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score: parseInt(score) }),
    });
  if(response.ok){
     window.location.reload();
  }
};


const getScores = async (gameId) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    return response.json();
};

export { createGame, submitScore, getScores };