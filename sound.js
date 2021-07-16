const mpg321 = require('mpg321');
const mplayer = mpg321().remote();
const mplayer2 = mpg321().remote();
const mplayer3 = mpg321().remote();

const shoot = 'shoot.mp3';
const menuSong = 'menu.mp3';
const mainSong = 'main.mp3';
const tankS = 'tank.mp3';

const fireSound = () => {
  mplayer.play(shoot);
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

const deadSound = () => {
  mpg321()
    .loop(1) // infinity loop
    .file('./dead.mp3')
    .exec();
};
const tankSound = () => {
  mplayer2.play(tankS);
};

const mainMusic = () => {
  mplayer3.gain(20);
  mplayer3.play(mainSong);
};

const menuMusic = () => {
  mplayer.play(menuSong);
};
module.exports = {
  fireSound,
  startSound,
  explosionSound,
  bricksSound,
  tankSound,
  mainMusic,
  menuMusic,
  mplayer2,
  mplayer3,
  mplayer,
  deadSound
};
