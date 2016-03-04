/**
 *
 * @type {string}
 */
var baseFnName = 'callbackHandler';

/**
 *
 * @type {number}
 */
var counter = 0;

/**
 * Create a callback function available in global scope.
 *
 * @param {function} callbackFn function to reference in global scope
 * @returns {string} name globally created function
 */
export default function (callbackFn) {
    var globalFnName;

    // generate non
    do {
        globalFnName = baseFnName + counter++;
    } while (typeof window[globalFnName] !== 'undefined');

    window[globalFnName] = callbackFn;

    return globalFnName;
}
