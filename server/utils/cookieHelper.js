exports.geReqCookieValueByName = (req, cookieName) => {
    if (req && req.headers.cookie) {
        const cookies = getReqCookies(req);
        let cookieCounter = 0;
        let cookieValue;
        cookies.some((cookie) => {
            if (cookie[0] === cookieName) {
                cookieValue = cookie[1];
                return true;
            }
            else if (cookieCounter !== cookies.length) {
                cookieCounter++;
                return;
            }
            else {
                return Error(`The specified cookie doesn't exist.`);
            }
        })
        return cookieValue;
    }
    return Error("No request object of cookies available.");
}

function getReqCookies(req) {
    const cookieString = req.headers.cookie;
    let cookiesArray = [];
    cookieString
        .replace(/\s/g, "")
        .split(";")
        .forEach((token) => {
            const keyValuePair = token.split("=");
            cookiesArray.push([keyValuePair[0], keyValuePair[1]]);
        })
    return cookiesArray;
}