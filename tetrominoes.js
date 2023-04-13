const piecesArray = [
    {
        positions: [
            [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 2, w: 0 }],
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }],
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 0, w: 1 }],
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 2 }]
        ],
        currentPose: 0,
        x: 4,
        y: 0
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 2, w: 1 }],
            [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }, { h: 0, w: 2 }],
            [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 0, w: 0 }],
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 0 }]
        ],
        currentPose: 0,
        x: 4,
        y: 0
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 0 }]
        ],
        currentPose: 0,
        x: 4,
        y: 0
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 1 }],
            [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 1, w: 0 }],
            [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }, { h: 0, w: 1 }],
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 1, w: 1 }]
        ],
        currentPose: 0,
        x: 4,
        y: 0
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 3, w: 0 }],
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 0, w: 3 }]
        ],
        currentPose: 0,
        x: 4,
        y: 0
    },
    {
        positions: [
            [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 0, w: 1 }, { h: 0, w: 2 }],
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 1, w: 1 }, { h: 2, w: 1 }]
        ],
        currentPose: 0,
        x: 4,
        y: 0
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 2 }],
            [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 0 }, { h: 2, w: 0 }]
        ],
        currentPose: 0,
        x: 4,
        y: 0
    },
];

// const J = {
//     positions: [
//         [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 2, w: 0 }],
//         [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }],
//         [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 0, w: 1 }],
//         [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 2 }]
//     ]
// }

// const L = {
//     positions: [
//         [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 2, w: 1 }],
//         [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }, { h: 0, w: 2 }],
//         [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 0, w: 0 }],
//         [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 0 }]
//     ]
// }

// const O = {
//     positions: [
//         [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 0 }]
//     ]
// }

// const T = {
//     positions: [
//         [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 1 }],
//         [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 1, w: 0 }],
//         [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }, { h: 0, w: 1 }],
//         [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 1, w: 1 }]
//     ]
// }

// const I = {
//     positions: [
//         [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 3, w: 0 }],
//         [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 0, w: 3 }]
//     ]
// }

// const S = {
//     positions: [
//         [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 0, w: 1 }, { h: 0, w: 2 }],
//         [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 1, w: 1 }, { h: 2, w: 1 }]
//     ]
// }

// const Z = {
//     positions: [
//         [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 2 }],
//         [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 0 }, { h: 2, w: 0 }]
//     ]
// }