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
  console.log("code: ", state);
}

getSupplier("ACME:123-L");
getSupplier("DI:12345-M");
getSupplier("ACE:1-12");

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
  console.log("product number: ", state);
}

getProductNumber("ACME:123-L");
getProductNumber("DI:12345-M");
getProductNumber("ACE:1-12");

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
  console.log("size: ", state);
}

getSize("ACME:123-L");
getSize("DI:12345-M");
getSize("ACE:1-12");
