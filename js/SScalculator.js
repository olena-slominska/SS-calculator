calcul.one.addEventListener('click', function() {
    calcul.result.value += '1';
}, false)
calcul.two.addEventListener('click', function() {
    calcul.result.value += '2';
}, false)
calcul.three.addEventListener('click', function() {
    calcul.result.value += '3';
}, false)
calcul.four.addEventListener('click', function() {
    calcul.result.value += '4';
}, false)
calcul.five.addEventListener('click', function() {
    calcul.result.value += '5';
}, false)
calcul.six.addEventListener('click', function() {
    calcul.result.value += '6';
}, false)
calcul.seven.addEventListener('click', function() {
    calcul.result.value += '7';
}, false)
calcul.eight.addEventListener('click', function() {
    calcul.result.value += '8';
}, false)
calcul.nine.addEventListener('click', function() {
    calcul.result.value += '9';
}, false)
calcul.zero.addEventListener('click', function() {
    calcul.result.value += '0';
}, false)
calcul.comma.addEventListener('click', function() {
    calcul.result.value += '.';
}, false)

calcul.plus.addEventListener('click', function() {
    calcul.result.value += '+';
}, false)
calcul.minus.addEventListener('click', function() {
    calcul.result.value += '-';
}, false)
calcul.mult.addEventListener('click', function() {
    calcul.result.value += '*';
}, false)
calcul.divid.addEventListener('click', function() {
    calcul.result.value += '/';
}, false)

calcul.equal.addEventListener('click', function() {
    calcul.result.value = eval(calcul.result.value);
}, false)
calcul.sqroot.addEventListener('click', function() {
    calcul.result.value = Math.sqrt(eval(calcul.result.value));
}, false)

calcul.clearAll.addEventListener('click', function() {
    calcul.result.value = null;
}, false)
