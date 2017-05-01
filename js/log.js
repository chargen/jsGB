"use strict";

var LOG = {
  _start: 0,

  reset: function() {
    this._start=Date.now();
  },

  out: function(module, str) {
    var ts = Date.now() - this._start;
    document.getElementById('msg').innerHTML += ('{' + ts + 'ms} [' + module + '] ' + str + '<br>');
  }
};
