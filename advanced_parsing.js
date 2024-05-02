"use strict";

function parseAndDisplayName(name) {
  const newName = name.trim().split(" ");
  let firstname;
  let middlename;
  let lastname;
  let sentence;
  if (newName.length == 2) {
    firstname = newName[0];
    lastname = newName[1];
    sentence = `First name :${firstname} \nLast name: ${lastname}`;
  } else if (newName.length === 3) {
    firstname = newName[0];
    middlename = newName[1];
    lastname = newName[2];
    sentence = `First name :${firstname} \nMiddle name: ${middlename} \nLast name: ${lastname}`;
  } else {
    firstname = newName[0];
    sentence = `First name: ${firstname}`;
  }
  console.log(sentence);
}

parseAndDisplayName("Brenda");
