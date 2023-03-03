let source;
let tiles = [];
let cols = 3;
let rows = 3;
let w, h;
let board = [];

function preload() {
    source = loadImage("./assets/images/Butterfly.png")
}

function setup() {
    createCanvas(600, 600);
    w = width/cols;
    h = height/rows;

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++) {
            let x = i * w;
            let y = j * h;
            let img = createImage(w, h);
            img.copy(source, x, y, w, h, 0, 0, w, h);
            let index = i + j * cols;
            board.push(index);
            let tile = new Tile(index, img);
            tiles.push(tile);
        }
    }

    puzzleShuffle(board);
}

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function puzzleShuffle(arr){
    for (let i = 0; i < 100; i++){
        let r1 = floor(random(0, arr.length));
        let r2 = floor(random(0, arr.length));
        swap(r1, r2, arr)
    }
}

function draw() {
    //image(source, 0, 0);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++) {
            let index = i + j * cols;
            let x = i * w;
            let y = j * h;
            let tileIndex = board[index];
            let img = tiles[tileIndex].img;
            image(img, x, y);
        }
    }

    // Show it as grid
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * w;
            let y = j * h;
            strokeWeight(2);
            noFill();
            rect(x, y, w, h);
        }
    }
}