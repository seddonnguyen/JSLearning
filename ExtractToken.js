const token = "1234-2323-424-4234235-4545";

const extract = (token, index) => {
    if(token === "" || index < 1) {
        return null;
    }

    let currentIdx = 0;
    let left = 0;
    let right = 0;

    while(right < token.length) {
        if(right + 1 < token.length && token.at(right) === "-" && token.at(right + 1) !== "-") {
            currentIdx++;
            left = right + 1;
        }
        if(currentIdx === index - 1 && right + 1 < token.length && token.at(right + 1) === "-") {
            right++;
            break;
        }
        right++;
    }

    if(currentIdx < index - 1) {
        return null;
    } else if(right >= token.length) {
        return token.slice(left);
    } else {
        return token.slice(left, right);
    }
};

console.log(extract(token, 1));