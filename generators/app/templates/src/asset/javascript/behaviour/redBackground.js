/**
 *
 */
import fastdom from 'fastdom';

export default function () {
    fastdom.mutate(function () {
        document.body.style.background = 'tomato';
    });
}
