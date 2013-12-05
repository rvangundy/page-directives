'use strict';

var animate = require('animate');

/**
 * Fades the passed element between given opacities(object) or using in/out(string).
 * @param {Context}  ctx  A context object
 * @param {Function} next Allows the next directive to proceed
 */
function fade(/* arguments */) {
    var child, direction, speed, history;
    var fadeVars = [];
    
    child     = arguments[0];
    direction = arguments[1];
    speed     = arguments[2];
    history   = arguments[3];
    console.log(history);

    if(direction==='in') {
        fadeVars = [0,1];
    }
    else if(direction==='out') {
        fadeVars = [1,0];
    }
    else {
        fadeVars = direction;
    }

    if(!speed) {
        speed = 100;
    }

    function opacity(element, startPos, stopPos) {
        return function(progress) {
            if(stopPos==0){
                element.style.opacity = (1 - progress);
            }
            else {
                element.style.opacity = progress * (stopPos - startPos);
            }        
        }
    }

    return function(ctx, next) {
        if (child.element) { child = child.element; }

        animate(
            opacity(child, fadeVars[0], fadeVars[1]),
            speed,
            animate.easeInOut,
            function() { next() }
        );
    };
}

module.exports = fade;
