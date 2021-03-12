import { handleNewMessgae } from './chat';
import { handleNewUser, handleDisconnected } from './notifications';
import { handleBeganPath, handleFilled, handleStrokedPath } from './paint';
import { handleGameStarted, handlePlayerUpdate } from './players';

let socket = null;

export const getSocket = () => socket;

export const initSockets = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnected, handleDisconnected);
  socket.on(events.newMsg, handleNewMessgae);
  socket.on(events.beganPath, handleBeganPath);
  socket.on(events.strokedPath, handleStrokedPath);
  socket.on(events.filled, handleFilled);
  socket.on(events.playerUpdate, handlePlayerUpdate);
  socket.on(events.gameStarted, handleGameStarted);
};
