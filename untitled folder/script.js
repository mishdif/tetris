let board;
const ROWS = 20;
const COLUMNS = 10;
const BOARD = [];
let currentPiece;
const piecesArray = [
    {
        positions: [
            [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 2, w: 0 }],
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }],
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 0, w: 1 }],
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 2 }]
        ],
        name: 'J'
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 2, w: 1 }],
            [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }, { h: 0, w: 2 }],
            [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 0, w: 0 }],
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 0 }]
        ],
        name: 'L'
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 0 }]
        ],
        name: 'O'
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 1, w: 1 }],
            [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 2, w: 1 }, { h: 1, w: 0 }],
            [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 1, w: 2 }, { h: 0, w: 1 }],
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 1, w: 1 }]
        ],
        name: 'T'
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 2, w: 0 }, { h: 3, w: 0 }],
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 0, w: 2 }, { h: 0, w: 3 }]
        ],
        name: 'I'
    },
    {
        positions: [
            [{ h: 1, w: 0 }, { h: 1, w: 1 }, { h: 0, w: 1 }, { h: 0, w: 2 }],
            [{ h: 0, w: 0 }, { h: 1, w: 0 }, { h: 1, w: 1 }, { h: 2, w: 1 }]
        ],
        name: 'S'
    },
    {
        positions: [
            [{ h: 0, w: 0 }, { h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 2 }],
            [{ h: 0, w: 1 }, { h: 1, w: 1 }, { h: 1, w: 0 }, { h: 2, w: 0 }]
        ],
        name: 'Z'
    },
];

window.onload = () => {
    board = document.getElementById('grid');

    for (let r = 0; r < ROWS; r++) {
        let row = [];
        for (let c = 0; c < COLUMNS; c++) {
            const tile = document.createElement('div');
            tile.id = `${r}-${c}`;
            board.append(tile);
            row.push(tile);
        }

        BOARD.push(row);
    }

    currentPiece = piecesArray[Math.floor(Math.random() * piecesArray.length)];
    currentPiece.x = 4;
    currentPiece.y = 0;
    currentPiece.currentPose = 0;
    drawPiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
    document.addEventListener("keyup", changePosition);
    setInterval(update, 500);
}

update = () => {
    if (currentPiece.positions[currentPiece.currentPose].some((cord) => {
        return (cord.h + currentPiece.y + 1 > 19 || 
            BOARD[cord.h + currentPiece.y + 1][cord.w + currentPiece.x].classList.contains('placed'));
    })) {
        placePiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
        currentPiece = piecesArray[Math.floor(Math.random() * piecesArray.length)];
        currentPiece.x = 4;
        currentPiece.y = 0;
        currentPiece.currentPose = 0;
    } else {
        removePiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
        currentPiece.y++;
        drawPiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
    }
}

drawPiece = (pos, h, w) => {
    pos.forEach((cord) => {
        BOARD[h + cord.h][w + cord.w].classList.add('block');
    });
}

placePiece = (pos, h, w) => {
    pos.forEach((cord) => {
        BOARD[h + cord.h][w + cord.w].classList.remove('block');
        BOARD[h + cord.h][w + cord.w].classList.add('placed');
    });

    BOARD.forEach((row) => {
        if (!row.some(cell => !cell.classList.contains('placed'))) {
            // removeRow();
        }
    });
}

removePiece = (pos, h, w) => {
    pos.forEach((cord) => {
        BOARD[h + cord.h][w + cord.w].classList.remove('block');
    });
}

changePosition = (event) => {
    if (event.code === 'ArrowUp') {
        let moveX = 0;
        const nextPose = currentPiece.positions[(currentPiece.currentPose + 1) % currentPiece.positions.length];
        nextPose.forEach((cord) => {
            const leftEdge = currentPiece.x + cord.w - 9;
            if (leftEdge > moveX) {
                moveX = leftEdge;
            }
        });

        removePiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
        currentPiece.x -= moveX;
        currentPiece.currentPose = (currentPiece.currentPose + 1) % currentPiece.positions.length;
        drawPiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
    } else if (event.code === 'ArrowDown') {
        if (currentPiece.positions[currentPiece.currentPose].some((cord) => {
            return (cord.h + currentPiece.y + 1 > 19 || 
                BOARD[cord.h + currentPiece.y + 1][cord.w + currentPiece.x].classList.contains('placed'));
        })) {
            placePiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
            currentPiece = piecesArray[Math.floor(Math.random() * piecesArray.length)];
            currentPiece.x = 4;
            currentPiece.y = 0;
            currentPiece.currentPose = 0;
        } else {
            removePiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
            currentPiece.y++;
            drawPiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
        }
    } else if (event.code === 'ArrowRight') {
        if (currentPiece.positions[currentPiece.currentPose].some(cord => currentPiece.x + cord.w + 1 > 9)) {
        } else {
            removePiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
            currentPiece.x++;
            drawPiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
        }
    } else if (event.code === 'ArrowLeft' && currentPiece.x - 1 >= 0) {
        removePiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
        currentPiece.x--;
        drawPiece(currentPiece.positions[currentPiece.currentPose], currentPiece.y, currentPiece.x);
    }
}