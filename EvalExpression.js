function evaluate(expression) {
    let sum = 0;
    let sign = 1;
    let stack = [];
    expression = expression.split(" ");

    for(let i = 0; i < expression.length; i++) {
        if(expression[i] === "*" || expression[i] === "/") {
            let op = expression[i];
            let num1 = Number(stack.pop());
            let num2 = Number(expression[++i]);

            if(op === "*") {
                stack.push(num1 * num2);
            } else {
                stack.push(num1 / num2);
            }
        } else {
            stack.push(expression[i]);
        }
    }

    while(stack.length > 0) {
        let c = stack.shift();
        if(c === '-') {
            sign = -1;
        } else if(c === "+") {
            sign = 1;
        } else {
            sum += Number(c) * sign;
        }
    }
    return sum
}

console.log(evaluate("5 + 4 * 3 / 2 - 1"));