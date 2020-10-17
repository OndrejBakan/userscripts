// ==UserScript==
// @name         objednavky.bilykonicek.cz: autocomplete off
// @namespace    http://ondrejbakan.cz/
// @version      0.1
// @description  Turns off autocomplete on date selectors.
// @author       Ondřej Bakan
// @match        https://objednavky.bilykonicek.eu
// @match        https://objednavky.bilykonicek.eu/orders-history
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var form = document.querySelector("#frm-dateRangeFilter-dateRangeFilter");
    if (form) {
        form.setAttribute("autocomplete", "off");
    }
})();
