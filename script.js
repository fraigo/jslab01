/**
JS Lab 01
==============
Francisco Igor
franciscoigor@gmail.com
**/




/*

Given two strings, a and b, return the result of putting them together in the order abba, 
e.g. "Hi" and "Bye" returns "HiByeByeHi".
(Test Cases)
makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"
*/
function makeAbba(first,second){
	return first+second+second+first;
}

console.log("*** makeAbba ***");
console.log(makeAbba("Hi", "Bye")); // "HiByeByeHi"
console.log(makeAbba("Yo", "Alice")); // "YoAliceAliceYo"
console.log(makeAbba("What", "Up")); // "WhatUpUpWhat"





/*
Given a string, return true if it ends in "ly".

    (Test Cases)
    endsLy("oddly") → true
    endsLy("y") → false
    endsLy("oddy") → false
*/
function endsLy(word){
	return word.endsWith("ly");
}

console.log("*** endsLy ***");
console.log(endsLy("oddly")); // true
console.log(endsLy("y")); // false
console.log(endsLy("oddy")); // false




/*
Given a string of even length, return the first half. 
So the string "WooHoo" yields "Woo".

    (Test Cases)
    firstHalf("WooHoo") → "Woo"
    firstHalf("HelloThere") → "Hello"
    firstHalf("abcdef") → "abc"
*/
function firstHalf(word){
	var len=word.length;
	if (len%2!=0){
		console.log(word+" is not of even length");
		return null;
	}
	return word.substring(0,len/2);
}

console.log("*** firstHalf ***");
console.log(firstHalf("WooHoo")); //"Woo"
console.log(firstHalf("HelloThere")); //"Hello"
console.log(firstHalf("abcdef")); //"abc"


/*
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. 
The string length will be at least 2.

(Test Cases)
right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"
*/
function right2(word){
	var len=word.length;
	if (len<2){
		console.log(word+" is not of even length");
		return null;
	}
	return word.substring(len-2,len)+word.substring(0,len-2);
}

console.log("*** right2 ***");
console.log(right2("Hello")); // "loHel"
console.log(right2("java")); // "vaja"
console.log(right2("Hi")); // "Hi"


/*
Given two strings, append them together (known as "concatenation") and return the result. 
However, if the concatenation creates a double-char, then omit one of the chars, 
so "abc" and "cat" yields "abcat".

(Test Cases)
conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"
*/
function conCat(word1,word2){
	var last1=word1.substring(word1.length-1);
	var first2=word2.substring(0,1);
	if (last1==first2){
		return word1+word2.substring(1);
	}else{
		return word1+word2;
	}
}

console.log("*** conCat ***");
console.log(conCat("abc", "cat")); // "abcat"
console.log(conCat("dog", "cat")); //"dogcat"
console.log(conCat("abc", "")); // "abc"


/*
Given a string, return true if the first 2 chars in the string also appear 
at the end of the string, such as with "edited".

(Test Cases)
frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true
*/
function frontAgain(word){
	var first2=word.substring(0,2);
	var last2=word.substring(word.length-2);
	return first2==last2;
}

console.log("*** endsLy ***");
console.log(frontAgain("edited")); // true
console.log(frontAgain("edit")); // false
console.log(frontAgain("ed")); // true



/*
Given a string, return a version without the first 2 chars. 
Except keep the first char if it is 'a' and keep the second char if it is 'b'. 
The string may be any length. Harder than it looks.

     (Test Cases)
deFront("Hello") → "llo"
deFront("java") → "va"
deFront("away") → "aay"
*/
function deFront(word){
	var firstChar=word.substring(0,1);
	var secondChar=word.substring(1,2);
	var result="";
	if (firstChar=="a"){
		result+="a";
	}
	if (secondChar=="b"){
		result+="b";
	}
	result+=word.substring(2);
	return result;
}

console.log("*** deFront ***");
console.log(deFront("Hello")); // "llo"
console.log(deFront("java")); //"va"
console.log(deFront("away")); //"aay"
//extra test
//console.log(deFront("ubay")); //"bay"



/*
Given a string, if one or both of the first 2 chars is 'x', 
return the string without those 'x' chars, and otherwise return the string unchanged. 
This is a little harder than it looks.

     (Test Cases)
     withoutX2("xHi") → "Hi"
     withoutX2("Hxi") → "Hi"
     withoutX2("Hi") → "Hi"
*/
function withoutX2(word){
	var firstChar=word.substring(0,1);
	var secondChar=word.substring(1,2);
	if (firstChar=="x" || secondChar=="x"){
		var result="";
		if (firstChar!="x"){
			result+=firstChar;
		}
		if (secondChar!="x"){
			result+=secondChar;
		}
		result+=word.substring(2);
		return result;
	}else{
		return word;
	}
}

console.log("*** withoutX2 ***");
console.log(withoutX2("xHi")); //"Hi"
console.log(withoutX2("Hxi")); //"Hi"
console.log(withoutX2("Hi")); // "Hi"


/*
Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, 
so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

(Test Cases)
lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"
*/
function lastChars(word1,word2){
	if (word1.length==0){
		firstChar1="@";
	}else{
		firstChar1=word1.substring(0,1);
	}
	if (word2.length==0){
		lastChar2="@";
	}else{
		lastChar2=word2.substring(word2.length-1);
	}
	return firstChar1+lastChar2;
}

console.log("*** lastChars ***");
console.log(lastChars("last", "chars")); // "ls"
console.log(lastChars("yo", "java")); //"ya"
console.log(lastChars("hi", "")); //"h@"



/*
Given a string of even length, return a string made of the middle two chars, 
so the string "string" yields "ri". The string length will be at least 2.

(Test Cases)
middleTwo("string") → "ri"
middleTwo("code") → "od"
middleTwo("Practice") → "ct"
*/
function middleTwo(word){
	var length=word.length;
	if (length<2){
		console.log(word+" must be at least 2 characters");
		return null;
	}
	if (length%2!=0){
		console.log(word+" is not of even length");
		return null;
	}
	var middlePos=length/2-1;
	return word.substr(middlePos,2);

}

console.log("*** middleTwo ***");
console.log(middleTwo("string")); //"ri"
console.log(middleTwo("code")); // "od"
console.log(middleTwo("Practice")); // "ct"





