const mpg321 = require('mpg321');

const fireSound = () => {
  mpg321()
    .loop(1) // infinity loop
    .file('./shoot.mp3')
    .exec();
};

const startSound = () => {
  mpg321()
    .loop(1) // infinity loop
    .file('./start.mp3')
    .exec();
};
//startSound();
const explosionSound = () => {
  mpg321()
    .loop(1) // infinity loop
    .file('./explosion.mp3')
    .exec();
};
const bricksSound = () => {
  mpg321()
    .loop(1) // infinity loop
    .file('./bricks.mp3')
    .exec();
};

const tankSound = () => {
  mpg321()
    .loop(2) // infinity loop
    .file('./tank.mp3')
    .exec();
};

const mainMusic = () => {
  mpg321()
    .loop(1) // infinity loop
    .file('./main.mp3')
    .exec();
};
module.exports = {
  fireSound,
  startSound,
  explosionSound,
  bricksSound,
  tankSound,
  mainMusic
};
