import _ from 'lodash';
import { Heyo } from './heyo';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const heyo = new Heyo();
  heyo.hey();

  return element;
}

document.body.appendChild(component());