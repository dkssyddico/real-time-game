import { disableCanvas, hideControls } from './paint';

const board = document.getElementById('jsPBoard');

const addPlayers = (players) => {
  board.innerHTML = '';
  players.forEach((player) => {
    const playerElement = document.createElement('span');
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

//리더를 제외 사람들이 그림을 못그리게 함.
export const handleGameStarted = () => {
  // disable canvas events
  disableCanvas();
  // hide the canvas controls
  hideControls();
};
