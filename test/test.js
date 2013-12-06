'use strict';

var assert = chai.assert;
var dir    = require('../index.js');
var page   = require('page');

page.base('/test');

/*******************************
 *  Basic Object Construction  *
 *******************************/

describe('Directives', function() {

    describe('load()', function() {
        var div = document.createElement('div');
        var div2 = document.createElement('div');

        div2.innerHTML = 'test';

        it('should load an element in to a parent element when a page has triggered', function() {
            page('/load', dir.load(div, div2), function() {
                assert.equal(div.children[0].innerHTML, 'test');
            });
            page('/load');
        });
    });

    describe('clear()', function() {
        var div = document.createElement('div');
        var div2 = document.createElement('div');

        div.appendChild(div2);

        it('should clear all child elements from the parent element', function() {
            page('/clear', dir.clear(div), function() {
                assert.equal(div.children.length, 0);
            });
            page('/clear');
        });
    });

    describe('fade()', function() {
        var div = document.createElement('div');

        it('should transition opacity of element to .5 in 500ms', function(ok) {
            page('/fade', dir.fade(div,[0,0.5], 500));
            page('/fade');

            setTimeout(function() {
                assert.equal(div.style.opacity, 0.5);
                ok();
            }, 600);
        });
    });
});
