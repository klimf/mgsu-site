
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

export const apiUrl = 'http://185.189.13.148/api/';

export function resolveApi(path, action, query) {

    var queryArr = [];


 	for(key in query) {
 		queryArr.push(key + '=' + query[key])
 	}
    
    return apiUrl + `${path.join('/')}/${action}/?${query && queryArr.join('&&')}`

}