const displayMailingLabel = (name, address, city, state, zip) => {
  console.log(
    `Hello my name is ${name} and I'm front ${city} ${state} and I live on ${address} and zip is ${zip} `
  );
};
displayMailingLabel("cj", "yoo mama street", "tampa", "florida", "45455");

const addNumbers = (num1, num2) => {
  parseInt(num1, num2);
  console.log(` The total of ${num1} and ${num2} is ${num1 + num2}`);
};

addNumbers(10, 5);

const displayReceipt = (total, paid) => {
  const changeDue = parseFloat(total) - parseFloat(paid);

  console.log(
    `the total is: ${total} and you only paid ${paid} change due ${Math.abs(
      changeDue
    )}`
  );
};

displayReceipt(100, 50);
