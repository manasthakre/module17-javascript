'use strict';

//Make a new variable `motto` for the value "The iSchool is my school"

var moto = "The iSchool is my school";
//Log out the motto
console.log(moto);

//Create a variable mottoLength that stores the length of the motto.
//Use the .length property
//Log out the length

var mottoLength = moto.length;
console.log(mottoLength);
//Convert motto to upper case, replacing the previous value
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods
//Log out the changed motto

var mottoupper = moto.toUpperCase();
console.log(mottoupper);
//Use the slice() method to extract the characters `ISCHOOL` into a new variable.
//Log out that variable

var piece = mottoupper.slice(4,11);
console.log(piece);
//Use the indexOf() method to see if the word "cool" is in your string
//Log out a boolean whether it is or not


//Create a variable `name` that is your name (in all caps)

var name = "MANAS THAKRE"
//Create a variable `namePossessive` that is the `name` variable followed by an `'S`


//Replace the word 'MY" in the motto with the `namePossessive` variable.
//Log out the new motto


//Log out the difference in length between the origial motto and the new motto
