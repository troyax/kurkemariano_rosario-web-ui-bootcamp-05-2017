import {EventEmitter} from './classes/eventemitter.js';
import {Movie} from './classes/movie.js';
import {Actor} from './classes/actor.js';
import {Logger} from './classes/logger.js';

let social = {
  share: function (friendName) {
    return friendName + ' share ' + this.title;
  },
  like: function (friendName) {
    return friendName + ' like ' + this.title;
  }
}
function extend(target) {
  if (!arguments[1]) {
    return;
  }
  for (let argumentsIndex = 0; argumentsIndex < arguments.length; argumentsIndex++) {
    let source = arguments[argumentsIndex];
    for (let property in source) {
      if (!target[property] && source.hasOwnProperty(property)) {
        target[property] = source[property];
      }
    }
  }
}
const titanic = new Movie('Titanic', 1997, 195);
const lg = new Logger;
extend(titanic, social);
titanic.on('play', lg.log);
titanic.on('pause', lg.log);
titanic.on('resume', lg.log);