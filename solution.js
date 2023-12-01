function solution(a, b) {
    let x = Math.floor((a / 10) * 7);
    let y = Math.floor((b / 10) * 7);
    let sum = (x + y);
    
    if (sum % 2 === 0) {
        return (x * y) + ((x + 1) * (y + 1));
    }
    
    sum += 1;
    return ((sum - x) * x) + ((sum - y) * y);
}
