/**
 * @type {fastdom}
 */
import fastdom from 'fastdom';

/**
 * @type {EventEmitter}
 */
import EventEmitter from './EventEmitter';

/**
 * @class Component
 */
class Component extends EventEmitter {

    /**
     * @param $element
     */
    constructor($element) {
        super();

        this._$element = $element;

        fastdom.measure(function () {
            this._initRead();
            fastdom.mutate(this._initWrite.bind(this));
        }.bind(this));
    }

    /**
     * @protected
     */
    _initRead() {
        // Groups initial read
    }

    /**
     * @protected
     */
    _initWrite() {
        // Groups initial write
    }
}

export default Component;
