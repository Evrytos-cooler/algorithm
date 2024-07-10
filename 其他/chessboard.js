let tile = 0 
function chessBoard(xstart, ystart, specialx, specialy, size) {
    if (size === 1) {
        return;
    }
    const t = tile++;
    const s = size / 2;

    if (specialx < xstart + s && specialy < ystart + s) {
        chessBoard(xstart, ystart, specialx, specialy, s);
    } else {
        board[xstart + s - 1][ystart + s - 1] = t;
        chessBoard(xstart, ystart, xstart + s - 1, ystart + s - 1, s);
    }

    if (specialx < xstart + s && specialy >= ystart + s) {
        chessBoard(xstart, ystart + s, specialx, specialy, s);
    } else {
        board[xstart + s - 1][ystart + s] = t;
        chessBoard(xstart, ystart + s, xstart + s - 1, ystart + s, s);
    }

    if (specialx >= xstart + s && specialy < ystart + s) {
        chessBoard(xstart + s, ystart, specialx, specialy, s);
    } else {
        board[xstart + s][ystart + s - 1] = t;
        chessBoard(xstart + s, ystart, xstart + s, ystart + s - 1, s);
    }

    if (specialx >= xstart + s && specialy >= ystart + s) {
        chessBoard(xstart + s, ystart + s, specialx, specialy, s);
    } else {
        board[xstart + s][ystart + s] = t;
        chessBoard(xstart + s, ystart + s, xstart + s, ystart + s, s);
    }
}

const size = 8; 
const index_x = 3;
const index_y = 5; 

const board = Array.from({ length: size }, () => Array(size).fill(0));
chessBoard(0, 0, index_x, index_y, size);

console.log(`特殊方格为(${index_x}, ${index_y}): ${board[index_x][index_y]}`);

for (let i of board) { 
    console.log(i)
}