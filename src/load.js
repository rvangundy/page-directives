'use strict';

/**
 * Loads an element in to the DOM, either as a child of the given element or
 * directly in to the body.
 * @param {Element} element The element to load
 */
function load(/* arguments */) {
	var parent, child;
	var argLen = arguments.length;

	if (argLen === 1) {
		parent = document.body;
		child = arguments[0];
	} else if (argLen === 2) {
		parent = arguments[0];
		child  = arguments[1];
	}

	return function(ctx, next) {
        if (parent.element) { parent = parent.element; }
        if (child.element) { child = child.element; }
		parent.appendChild(child);
		next();
	};
}

module.exports = load;
