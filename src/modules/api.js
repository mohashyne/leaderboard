import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";
import displayScores from "./displayscores";

// const createGame = async (name) => {
//     const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name }),
//     });
//     return response.json();
// };

// const gameId = '0dbbI875CtNkbki3cyiL'

const submitScore = async (gameId, user, score) => {
    debugger
    const response =  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score: parseInt(score) }),
    });
    if(response.ok){
        debugger;
        const scoresData = await getScores(gameId);
        displayScores(scoresData.result);
    }
};


const getScores = async (gameId) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    return response.json();
};

export { submitScore, getScores };