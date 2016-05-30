// ==UserScript==
// @name         IHK Prüfungsergebnisse
// @namespace    codexp
// @version      0.1
// @description  Überwachung der Prüfungsergebnisse
// @author       codexp@gmx.net
// @match        https://ausbildung.ihk.de/pruefungsinfos/ergebnisse10.aspx?knr=*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function ($) {
    'use strict';

    var rows = $('tr', $('.content table')[1]);
    var context = new (window.AudioContext || window.webkitAudioContext)();
    var o; // instantiate an oscillator
    var refreshTime = 60; // in seconds

    setTimeout(function () {
        window.location.reload();
    }, refreshTime * 1000);

    if (rows.length > 2) {
        o = create_oscillator();
        o.start(); // start the oscillator
        setTimeout(function () {
            stop_oscillator(o);
        }, 2000);
    }

    var trySoundDiv = $('<div class="try-sound">');

    trySoundDiv.css('position', 'fixed');
    trySoundDiv.css('top', '10px');
    trySoundDiv.css('right', '20px');
    trySoundDiv.append($('<button>').text('try sound').click(try_sound));

    $('body').append(trySoundDiv);

    function try_sound() {
        o = create_oscillator();
        o.start(); // start the oscillator
        setTimeout(function () {
            stop_oscillator(o);
        }, 2000);
    }

    function create_oscillator(frequency, type) {
        var o = context.createOscillator();

        if (undefined === frequency) {
            frequency = 440;
        }
        if (undefined === type) {
            type = 'sawtooth';
        }

        o.type = type;  // square, sawtooth, triangle
        o.frequency.value = frequency; // Hz
        o.connect(context.destination); // connect it to the destination

        return o;
    }

    function stop_oscillator(o) {
        o.stop();
        o.disconnect(context.destination);
    }
})(jQuery);
