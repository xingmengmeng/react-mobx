import qs from 'qs';
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.status);
        error.response = response;
        throw error;
    }
}
function parseJSON(response) {
    return response.json();
}
export function get(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
        credentials: 'include'
    }).then(checkStatus).then(parseJSON).catch(e => { console.log(e) });
}
export function post(url, obj) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        body: qs.stringify(obj),
    }).then(checkStatus).then(parseJSON).catch(e => { console.log(e) });
}
export function deleteF(url) {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
        },
        credentials: 'include'
    }).then(checkStatus).then(parseJSON).catch(e => { console.log(e) });
}