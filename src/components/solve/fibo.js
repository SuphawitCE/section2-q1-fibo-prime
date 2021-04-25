const perfectSquare = (num) => {
    return num > 0 && Math.sqrt(num) % 1 === 0;
};
  
export const isFibonacci = (num) => {
    return perfectSquare(5 * num ** 2 + 4) || perfectSquare(5 * num ** 2 - 4);
};