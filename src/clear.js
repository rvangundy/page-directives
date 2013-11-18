'use strict';

/**
 * Clears the current page from the body tag down, excluding <script> tags
 * @param {Context}  ctx  A context object
 * @param {Function} next Allows the next directive to proceed
 */
function clear(parent) {
    return function(ctx, next) {
        var child;
        var children = Array.prototype.slice.call(parent.childNodes, 0);
        var frag     = document.createDocumentFragment();

        // Clear all elements other than script tags
        for (var i = 0, len = children.length; i < len; i += 1) {
            child = children[i];
            if (!child.tagName || child.tagName !== 'SCRIPT') {
                frag.appendChild(child);
            }
        }

        next();
    };
}

module.exports = clear;
