export const SHAPES = {
    I: [[1, 1, 1, 1]],
    O: [[1, 1], [1, 1]],
    T: [[0, 1, 0], [1, 1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    Z: [[1, 1, 0], [0, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]]
};

export const MESSAGES = {
    single: [
        "Lets gooooo",
        "You're the only Ball I'd never want to bounce.",
        "Nice pappu",
        "Ball is on a roll",
    ],
    double: [
        "Killing it ball",
        "I love you more than you love a fresh prescription",
        "Whatever the dealer's giving you, it's working. You look great."
    ],
    triple: [
        "I can't believe I get to love someone as wonderful as you",
        "Every photo of you is my favorite photo",
        "You're the best thing that's happened to me",
        "These memories with you mean everything",
    ],
    tetris: [
        "Okay I will marry you now.",
    ]
};

export const PHOTO_SETS = {
    I: process.env.PUBLIC_URL + '/photos/photo1.png',
    O: process.env.PUBLIC_URL + '/photos/photo2.png',
    T: process.env.PUBLIC_URL + '/photos/photo3.png',
    S: process.env.PUBLIC_URL + '/photos/photo4.png',
    Z: process.env.PUBLIC_URL + '/photos/photo5.png',
    J: process.env.PUBLIC_URL + '/photos/photo6.png',
    L: process.env.PUBLIC_URL + '/photos/photo7.png',
};

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 15;
export const INITIAL_DROP_SPEED = 800;
export const SPEED_INCREASE = 50;

export const LOGIN_QUESTIONS = [
    // {
    //     id: 1,
    //     question: "Where did Rishab & Rithika first meet?",
    //     correctAnswers: ["Metro"]
    // },
    // {
    //     id: 2,
    //     question: "What was Rishab's German Shephard's name?",
    //     correctAnswers: ["Bhageera", "bagheera", "bageera"]
    // },
    // {
    //     id: 3,
    //     question: "What is my biggest fear?",
    //     correctAnswers: ["Drowning", "Stranded in the ocean", "Stranded at sea", "ocean", "the ocean"]
    // },
    // {
    //     id: 4,
    //     question: "When was the first time Rishab said he loved you?",
    //     correctAnswers: ["18th Feb 2021", "18/2/2021", "feb 18th 2021"]
    // },
    // {
    //     id: 5,
    //     question: "What was the first gift Rishab bought you?",
    //     correctAnswers: ["bracelet", "pearls", "pearl bracelet"]
    // },
    {
        id: 6,
        question: "What is Rishab's favorite memory with you?",
        correctAnswers: ["gili", "shrooms in gili", "laughing in gili", "mushroom trip"]
    },
    // {
    //     id: 7,
    //     question: "Do you love me?",
    //     correctAnswers: ["Yes", "Of course", "Always", "I do"]
    // }
];
