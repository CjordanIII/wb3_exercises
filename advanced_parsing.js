"use strict";

function parseAndDisplayName(name) {
  const newName = name.trim().split(" ");
  //   declaration
  let firstname;
  let middlename;
  let lastname;
  let sentence;
  //   fisrt and last name
  if (newName.length == 2) {
    firstname = newName[0];
    lastname = newName[1];
    sentence = `First name :${firstname} \nLast name: ${lastname}`;
  } else if (newName.length === 3) {
    // fisrt middle last
    firstname = newName[0];
    middlename = newName[1];
    lastname = newName[2];
    sentence = `First name :${firstname} \nMiddle name: ${middlename} \nLast name: ${lastname}`;
  } else {
    // first name
    firstname = newName[0];
    sentence = `Only name: ${firstname}`;
  }
  //   results
  console.log(sentence);
}
console.log("============================\n");
parseAndDisplayName("cher");
console.log("============================\n");
parseAndDisplayName("Brenda kaye");
console.log("============================\n");
parseAndDisplayName("Dana Lynn Wyatt");
console.log("============================\n");
