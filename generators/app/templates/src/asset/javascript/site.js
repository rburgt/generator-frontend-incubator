/**
 *
 */
import $ from 'jquery';

/**
 *
 */
import fastclick from 'fastclick';


/**
 *
 */
import redBackground from './behaviour/redBackground';


$(function () {
    // Attach fastclick to body and all subelements
    fastclick(document.body);

    redBackground();
});
