"use strict";

var tabMagic = {
    _map: {},

    init: function () {
        var l = document.getElementsByTagName('ul'),
            i = 0,
            j = 0,
            t;

        for (; i < l.length; i++) {
            if (l[i].className.indexOf('tablist') >= 0) {
                t = l[i].getElementsByTagName('li');
                for (; j < t.length; j++) {
                    tabMagic._map[t[j].getAttribute('rel')] = l[i].id;
                    t[j].onclick = function () {
                        tabMagic.sw(this.getAttribute('rel'));
                        return false;
                    };
                }
                tabMagic.sw(t[0].getAttribute('rel'));
            }
        }
    },

    sw: function (tr) {
        var tl = document.getElementsByTagName('ul'),
            li = 0,
            lj = 0,
            items;

        for (; li < tl.length; li++) {
            if (tl[li].className.indexOf('tablist') >= 0 && tl[li].id == tabMagic._map[tr]) {
                items = tl[li].getElementsByTagName('li');
                for (; lj < items.length; lj++) {
                    if (items[lj].getAttribute('rel') == tr) {
                        items[lj].className = 'tab_hi';
                        document.getElementById(items[lj].getAttribute('rel')).style.display = 'block';
                    }
                    else {
                        items[lj].className = 'tab';
                        document.getElementById(items[lj].getAttribute('rel')).style.display = 'none';
                    }
                }
            }
        }
    }
};
