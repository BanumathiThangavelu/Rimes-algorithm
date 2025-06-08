function addNumbers(num1, num2) {
  let result = "";
  let carry = 0;

  let maxLen = Math.max(num1.length, num2.length);
  console.log("Max length",maxLen)
  num1 = num1.padStart(maxLen, "0");
  num2 = num2.padStart(maxLen, "0");

  for ( i = maxLen - 1; i >= 0; i--) {
    let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    carry = Math.floor(sum / 10);
    console.log("Carry",carry)
    result = (sum % 10).toString() + result;
    console.log("result",result)
  }

  if (carry > 0) {
      result = carry.toString() + result;
  }
  console.log("final result",result)
  return result;
}

const input1 = "39";
const input2 = "1";

const sum = addNumbers(input1, input2);
console.log("Sum of Numbers:", sum);