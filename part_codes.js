function getSupplier(code) {
  let state;
  switch (code) {
    case "ACME:123-L":
      state = "ACME";
      break;
    case "DI:12345-M":
      state = "DI";
      break;

    case "ACE:1-12":
      state = "ACE";
      break;
    default:
      state = "unknown";
      break;
  }
  return state;
}

function getProductNumber(code) {
  let state;
  switch (code) {
    case "ACME:123-L":
      state = "123";
      break;
    case "DI:12345-M":
      state = "12345";
      break;

    case "ACE:1-12":
      state = "1";
      break;
    default:
      state = "unknown";
      break;
  }
  return state;
}

function getSize(code) {
  let state;
  switch (code) {
    case "ACME:123-L":
      state = "L";
      break;
    case "DI:12345-M":
      state = "M";
      break;
    case "ACE:1-12":
      state = "size 12";
      break;
    default:
      state = "unknown";
      break;
  }
  return state;
}

console.log(
  `the supplier is ${getSupplier(
    "ACME:123-L"
  )} and the product Number is${getProductNumber(
    "ACME:123-L"
  )} and the size is ${getSize("ACME:123-L")}`
);

console.log(
  `the supplier is ${getSupplier(
    "DI:12345-M"
  )}  and the product Number is ${getProductNumber(
    "DI:12345-M"
  )} and the size is ${getSize("DI:12345-M")}`
);

console.log(
  `the supplier is ${getSupplier(
    "ACE:1-12"
  )} and the product Number is${getProductNumber(
    "ACE:1-12"
  )} and the size is ${getSize("ACE:1-12")}`
);
