import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import {
  SHAPES,
  MESSAGES,
  PHOTO_SETS,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  INITIAL_DROP_SPEED,
  SPEED_INCREASE
} from './constants';
import Board from './components/Board';
import Stats from './components/Stats';
import Message from './components/Message';
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import ControlsHint from './components/ControlsHint';
import LoginQuestionnaire from './components/LoginQuestionnaire';
import Sidebar from './components/Sidebar';
import { LOGIN_QUESTIONS } from './constants';

function App() {
  const createEmptyBoard = useCallback(() => {
    return Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(null));
  }, []);

  const getRandomPiece = useCallback(() => {
    const shapes = Object.keys(SHAPES);
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    return {
      shape: SHAPES[randomShape],
      type: randomShape,
      photo: PHOTO_SETS[randomShape]
    };
  }, []);

  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState(null);
  const [nextPiece, setNextPiece] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(null);
  const [dropSpeed, setDropSpeed] = useState(INITIAL_DROP_SPEED);
  const [touchStart, setTouchStart] = useState(null);
  const [usedMessages, setUsedMessages] = useState({ single: [], double: [], triple: [], tetris: [] });

  const gameLoopRef = useRef(null);
  const messageTimeoutRef = useRef(null);

  const getRandomMessage = useCallback((category) => {
    const availableMessages = MESSAGES[category].filter(
      msg => !usedMessages[category].includes(msg)
    );

    if (availableMessages.length === 0) {
      setUsedMessages(prev => ({ ...prev, [category]: [] }));
      return MESSAGES[category][Math.floor(Math.random() * MESSAGES[category].length)];
    }

    const message = availableMessages[Math.floor(Math.random() * availableMessages.length)];
    setUsedMessages(prev => ({
      ...prev,
      [category]: [...prev[category], message]
    }));

    return message;
  }, [usedMessages]);

  const showMessage = useCallback((linesCleared) => {
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }

    let category;
    if (linesCleared === 1) category = 'single';
    else if (linesCleared === 2) category = 'double';
    else if (linesCleared === 3) category = 'triple';
    else if (linesCleared >= 4) category = 'tetris';

    const newMessage = getRandomMessage(category);
    setMessage(newMessage);

    messageTimeoutRef.current = setTimeout(() => {
      setMessage(null);
    }, 3000);
  }, [getRandomMessage]); // eslint-disable-line react-hooks/exhaustive-deps

  const canMove = useCallback((piece, pos, testBoard = board) => {
    if (!piece) return false;

    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const newX = pos.x + x;
          const newY = pos.y + y;

          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
            return false;
          }

          if (newY >= 0 && testBoard[newY][newX]) {
            return false;
          }
        }
      }
    }
    return true;
  }, [board]);

  const rotate = useCallback((piece) => {
    const rotated = piece.shape[0].map((_, i) =>
      piece.shape.map(row => row[i]).reverse()
    );
    return { ...piece, shape: rotated };
  }, []);

  const mergePieceToBoard = useCallback((piece, pos, targetBoard) => {
    const newBoard = targetBoard.map(row => [...row]);

    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const boardY = pos.y + y;
          const boardX = pos.x + x;
          if (boardY >= 0) {
            newBoard[boardY][boardX] = piece.photo;
          }
        }
      });
    });

    return newBoard;
  }, []);

  const clearLines = useCallback((boardToClear) => {
    let linesCleared = 0;
    const newBoard = boardToClear.filter(row => {
      const isFull = row.every(cell => cell !== null);
      if (isFull) linesCleared++;
      return !isFull;
    });

    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(null));
    }

    return { newBoard, linesCleared };
  }, []);

  const lockPiece = useCallback((forcedPos = null) => {
    const finalPos = forcedPos || position;
    if (!currentPiece) return;

    const mergedBoard = mergePieceToBoard(currentPiece, finalPos, board);
    const { newBoard, linesCleared } = clearLines(mergedBoard);

    setBoard(newBoard);

    if (linesCleared > 0) {
      setLines(prev => prev + linesCleared);
      setScore(prev => prev + (linesCleared * 100 * linesCleared));
      showMessage(linesCleared);

      // Increase speed every 5 lines
      setDropSpeed(prev => {
        const totalLines = lines + linesCleared;
        if (totalLines > 0 && totalLines % 5 === 0) {
          return Math.max(200, prev - SPEED_INCREASE);
        }
        return prev;
      });
    }

    setCurrentPiece(nextPiece);
    setNextPiece(getRandomPiece());
    setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 });

    if (!canMove(nextPiece, { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 }, newBoard)) {
      setGameOver(true);
    }
  }, [board, currentPiece, position, nextPiece, lines, mergePieceToBoard, clearLines, showMessage, canMove, getRandomPiece]);

  const moveDown = useCallback(() => {
    if (!currentPiece || gameOver) return;

    const newPos = { ...position, y: position.y + 1 };
    if (canMove(currentPiece, newPos)) {
      setPosition(newPos);
    } else {
      lockPiece();
    }
  }, [currentPiece, position, gameOver, lockPiece, canMove]);

  const moveLeft = useCallback(() => {
    if (!currentPiece || gameOver) return;
    const newPos = { ...position, x: position.x - 1 };
    if (canMove(currentPiece, newPos)) {
      setPosition(newPos);
    }
  }, [currentPiece, position, gameOver, canMove]);

  const moveRight = useCallback(() => {
    if (!currentPiece || gameOver) return;
    const newPos = { ...position, x: position.x + 1 };
    if (canMove(currentPiece, newPos)) {
      setPosition(newPos);
    }
  }, [currentPiece, position, gameOver, canMove]);

  const rotatePiece = useCallback(() => {
    if (!currentPiece || gameOver) return;
    const rotated = rotate(currentPiece);
    if (canMove(rotated, position)) {
      setCurrentPiece(rotated);
    }
  }, [currentPiece, position, gameOver, rotate, canMove]);

  const hardDrop = useCallback(() => {
    if (!currentPiece || gameOver) return;
    let newPos = { ...position };
    while (canMove(currentPiece, { ...newPos, y: newPos.y + 1 })) {
      newPos.y++;
    }
    // Lock the piece immediately at the bottom position
    lockPiece(newPos);
  }, [currentPiece, position, gameOver, lockPiece, canMove]);

  // Touch controls
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
      time: Date.now()
    };

    const deltaX = touchEnd.x - touchStart.x;
    const deltaY = touchEnd.y - touchStart.y;
    const deltaTime = touchEnd.time - touchStart.time;

    // Tap to rotate
    if (Math.abs(deltaX) < 30 && Math.abs(deltaY) < 30 && deltaTime < 200) {
      rotatePiece();
    }
    // Swipe detection
    else if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 30) moveRight();
      else if (deltaX < -30) moveLeft();
    } else {
      if (deltaY > 50) hardDrop();
    }

    setTouchStart(null);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted || gameOver) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          moveLeft();
          break;
        case 'ArrowRight':
          e.preventDefault();
          moveRight();
          break;
        case 'ArrowDown':
          e.preventDefault();
          moveDown();
          break;
        case 'ArrowUp':
          e.preventDefault();
          rotatePiece();
          break;
        case ' ':
          e.preventDefault();
          hardDrop();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver, moveLeft, moveRight, moveDown, rotatePiece, hardDrop]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || !currentPiece) return;

    gameLoopRef.current = setInterval(moveDown, dropSpeed);
    return () => clearInterval(gameLoopRef.current);
  }, [gameStarted, gameOver, currentPiece, moveDown, dropSpeed]);

  // Initialize game
  const startGame = () => {
    setBoard(createEmptyBoard());
    const piece1 = getRandomPiece();
    const piece2 = getRandomPiece();
    setCurrentPiece(piece1);
    setNextPiece(piece2);
    setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 });
    setScore(0);
    setLines(0);
    setGameOver(false);
    setGameStarted(true);
    setMessage(null);
    setDropSpeed(INITIAL_DROP_SPEED);
    setUsedMessages({ single: [], double: [], triple: [], tetris: [] });
  };

  // Render board with current piece
  const renderBoard = () => {
    const displayBoard = board.map(row => [...row]);

    if (currentPiece && !gameOver) {
      currentPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            const boardY = position.y + y;
            const boardX = position.x + x;
            if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
              displayBoard[boardY][boardX] = currentPiece.photo;
            }
          }
        });
      });
    }

    return displayBoard;
  };

  const displayBoard = renderBoard();

  return (
    <div className="app">
      <div className="game-container">
        <h1 className="title">Hi Ball!</h1>

        {/* 
          TO REMOVE THE QUESTIONNAIRE GATE:
          1. Change "!isLoggedIn" below to "false" 
          2. OR set the initial state of "isLoggedIn" to true at the top of the component.
        */}
        {!isLoggedIn ? (
          <LoginQuestionnaire
            questions={LOGIN_QUESTIONS}
            onSuccess={() => setIsLoggedIn(true)}
          />
        ) : !gameStarted ? (
          <StartScreen startGame={startGame} />
        ) : (
          <>
            <Stats score={score} lines={lines} />
            <Message message={message} />
            <div className="game-body">
              <Board
                displayBoard={displayBoard}
                handleTouchStart={handleTouchStart}
                handleTouchEnd={handleTouchEnd}
              />
              <Sidebar nextPiece={nextPiece} />
            </div>
            {gameOver && <GameOver score={score} lines={lines} startGame={startGame} />}
            <ControlsHint />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
