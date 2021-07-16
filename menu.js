const term = require('terminal-kit').terminal;
const cfonts = require('cfonts');
const fs = require('fs');
const mainMusic = require('./sound').mainMusic;
const menuMusic = require('./sound').menuMusic;
const mplayer = require('./sound').mplayer;
const mplayer2 = require('./sound').mplayer2;
const mplayer3 = require('./sound').mplayer3;

const title = () => {
  cfonts.say('Lambda|City', {
    font: '3d',
    align: 'center',
    colors: ['red']
  });
};

const menu = [
  cfonts.render('Play', {
    font: 'block',
    align: 'center',
    colors: ['white']
  }).string,
  cfonts.render('High Scores', {
    font: 'block',
    align: 'center',
    colors: ['white']
  }).string,
  cfonts.render('Exit', {
    font: 'block',
    align: 'center',
    colors: ['white']
  }).string
];

const mainMenu = (menu) => {
  term.singleColumnMenu(menu, function (error, response) {
    response.selectedIndex;
    if (response.selectedIndex === 0) {
      mplayer.stop();
      const main = require('./main');
    } else if (response.selectedIndex === 1) {
      console.clear();
      let array = fs.readFileSync('message.txt').toString().split('\n');
      array = array
        .sort((a, b) => Number(b.split(' ')[2]) - Number(a.split(' ')[2]))
        .slice(0, 5)
        .join('\r\n');
      cfonts.say(`${array}`, {
        font: 'block',
        align: 'center',
        colors: ['white']
      });
      cfonts.say('Press esc to go back', {
        font: 'block',
        align: 'center',
        colors: ['red']
      });
      term.grabInput();
      term.on('key', function (name) {
        if (name === 'ESCAPE') {
          term.removeAllListeners('key');
          console.clear();
          title();
          mainMenu(menu);
        }
      });
    } else {
      mplayer.stop();

      console.clear();
      process.exit();
    }
  });
};

menuMusic();
console.clear();
title();
mainMenu(menu);
menuMusic();

module.exports = {
  title,
  mainMenu
};
