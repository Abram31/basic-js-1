import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let nameTeame = [];
  let toString = Object.prototype.toString;
  if (Array.isArray(members)) {
    let name = members.map(item => {
      if(toString.call(item) === '[object String]') {
        return item.trim();
      }
    })
       name.forEach(function (item)  {
        if (item != undefined) {
            nameTeame =item.toLowerCase().substr(0,1) + nameTeame;
        }
         else false;
        }
    )
  }
  
  if (!isNaN(nameTeame) && nameTeame != null ) {
    nameTeame = false;
  } else {nameTeame = nameTeame.split('').sort().join('').toUpperCase()}

    return nameTeame;
}
