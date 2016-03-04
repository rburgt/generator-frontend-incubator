/**
 * @type {jquery}
 */
import $ from 'jquery';

/**
 * @class EventEmitter
 */
class EventEmitter {

    constructor() {
        this._eventEmitter = $('<div />');
    }

    /**
     * @public
     */
    triggerEvent() {
        this._eventEmitter.trigger.apply(this._eventEmitter, arguments);
    }

    /**
     * @public
     */
    addEventListener() {
        this._eventEmitter.on.apply(this._eventEmitter, arguments);
    }

    /**
     * @public
     */
    addEventListenerOnce() {
        this._eventEmitter.one.apply(this._eventEmitter, arguments);
    }

    /**
     * @public
     */
    removeEventListener() {
        this._eventEmitter.off.apply(this._eventEmitter, arguments);
    }

}

export default EventEmitter;
