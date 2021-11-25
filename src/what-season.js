import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

  let season;
  
  if (Object.prototype.toString.call(date) === '[object Date]') {
    if ()
        if(date.getMonth() <= 1 && date.getMonth() >= 0 || date.getMonth() === 11 ) {
          season = 'winter';
        }
        if(date.getMonth() <= 4 && date.getMonth() >= 2) {
          season = 'spring';
        }
        if(date.getMonth() <= 7 && date.getMonth() >= 5) {
          season = 'summer';
        }
        if(date.getMonth() <= 10 && date.getMonth() >= 8) {
          season = /autumn|fall/;
        }
      } else { if (date) {
                season = 'Invalid date!';
              } else {season = 'Unable to determine the time of year!';}
    }
  return season;
}
