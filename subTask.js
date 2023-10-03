function countPlatformBalance(message) {
    let total = 0;
    let currentNumber = "";
    let isDeposit = false;
    let sign = 1;
    for (let i = 0; i < message.length; i++) {
        if ((message[i] >= "0" && message[i] <= "9") || message[i] === ",") {
            if (message[i] === ",") {
                currentNumber += ".";
            } else {
                currentNumber += message[i];
            }
        } else if (currentNumber) {
            if (isDeposit) {
                total += sign * parseFloat(currentNumber);
                isDeposit = false;
            } else {
                total -= parseFloat(currentNumber);
            }
            currentNumber = "";
        }
        if (
            i < message.length - 8 &&
            message.substring(i, i + 8) === "Platform"
        ) {
            isDeposit = true;
        }
    }
    return total;
}
const text =
    "Mike received $159,34. Lisa received $95,59. Kate received $140,12. Platform deposit $950,81. How much money is left on the platform?";

console.log(countPlatformBalance(text));
