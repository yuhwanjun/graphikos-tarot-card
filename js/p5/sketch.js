// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 6;

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(12, 0, 23);

    // Creating the save button for the file
    saveButton = createButton('save');
    saveButton.class('save');
    saveButton.mousePressed(saveFile);

    // Creating the clear screen button
    clearButton = createButton('clear');
    clearButton.class('clear');
    clearButton.mousePressed(clearScreen);

}

// Save File Function
function saveFile() {
    save('mydesign.jpg');
}

// Clear Screen function
function clearScreen() {
    background(12, 0, 23);
}

function draw() {
    translate(width / 2, height / 2);

    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let mx = mouseX - width / 2;
        let my = mouseY - height / 2;
        let pmx = pmouseX - width / 2;
        let pmy = pmouseY - height / 2;

        if (mouseIsPressed) {
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                strokeWeight(4);
                stroke(255);
                line(mx, my, pmx, pmy);
                push();
                scale(1, -1);
                line(mx, my, pmx, pmy);
                pop();
            }
        }
    }
}
