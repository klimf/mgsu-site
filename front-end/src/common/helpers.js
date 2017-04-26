export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function formatMoney(value) {
    if(value) {
        return value.toFixed().replace(/./g, function(c, i, a) {
            return (i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c);
        });
    } else {
        return;
    }
}