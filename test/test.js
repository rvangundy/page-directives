'use strict';

var assert = chai.assert;
var dir    = require('../index.js');
var page   = require('page');

/*******************************
 *  Basic Object Construction  *
 *******************************/

describe('Directives', function() {

    describe('load()', function() {
        var div = document.createElement('div');
        var div2 = document.createElement('div');

        div2.innerHTML = 'test';

        it('should load an element in to a parent element when a page has triggered', function() {
            page('/', dir.load(div, div2), function() {
                assert.equal(div.children[0].innerHTML, 'test');
            });
            page('/');
        });
    });

    describe('clear()', function() {
        var div = document.createElement('div');
        var div2 = document.createElement('div');

        div.appendChild(div2);

        it('should clear all child elements from the parent element', function() {
            page('/', dir.clear(div), function() {
                assert.equal(div.children.length, 0);
            });
            page('/');
        });
    });
});
