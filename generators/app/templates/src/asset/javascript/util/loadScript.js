/**
 * @type {fastdom}
 */
import fastdom from 'fastdom';

/**
 *
 */
import $ from 'jquery';

/**
 *
 */
import createGlobalCallback from './createGlobalCallback';


/**
 *
 * @type {Element}
 */
var headElement = document.querySelector('head');

/**
 * Shortnames for services to be implemented
 *
 * @type {object}
 */
var scriptUrlNames = {
    'share-button-twitter': '//platform.twitter.com/widgets.js',
    'share-button-facebook': '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4',
    'share-button-google-plus': '//apis.google.com/js/platform.js',
    'google-maps': '//maps.googleapis.com/maps/api/js?callback=__callbackHandler__'
};

/**
 * Caches script loaders, when loaded twice the
 * initial tracker can be returned.
 *
 * @type {object}
 */
var loadScriptDeferredCache = {};

/**
 *
 * @param {string} url
 * @param {function} [forceLoad] defaults to false. If set to true the document is forcefully loaded again
 * @returns {*}
 */
var loadScript = function (url, forceLoad = false) {
    var deferred;

    // check if shortcut url is available
    if (scriptUrlNames[url]) {
        url = scriptUrlNames[url];
    }


    // check if document is forced to load or already loaded
    if (forceLoad || !loadScriptDeferredCache[url]) {
        deferred = $.Deferred();
        loadScriptDeferredCache[url] = deferred;

        let callbackHandler = function () {
            if (deferred.state() !== 'resolved') {
                deferred.resolve();
            }
        };

        fastdom.mutate(function () {

            // Adding the script tag to the head as suggested before
            var script = document.createElement('script');
            script.type = 'text/javascript';

            if (url.indexOf('__callbackHandler__')) {
                url = url.replace('__callbackHandler__', createGlobalCallback(callbackHandler));
            } else {
                script.onreadystatechange = callbackHandler;
                script.onload = callbackHandler;
            }

            script.src = url;

            // Fire the loading
            headElement.appendChild(script);
        });
    } else {
        // if not forced and already loaded, return cached deferred
        deferred = loadScriptDeferredCache[url];
    }

    return deferred;

};

export default loadScript;
