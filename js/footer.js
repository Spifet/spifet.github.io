//codingLanguages = ["HTML"];
const codingLanguages2 = ["HTML", "CSS", "JavaScript"];
//const codingLanguages3 = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"];

//Copies the original array so it is not modified
//One only selection of Array to process and use
const newArray = codingLanguages2;

let finalSentence;
//Takes lastWord, removes it in newArray, adds commas
//Array becomes string, add "and" and lastWord
if(newArray.length>1){
    let lastWord = newArray[newArray.length-1];
    newArray.pop();
    finalSentence = newArray.join(", ")
    finalSentence = finalSentence.concat(' and ');
    finalSentence = finalSentence.concat(lastWord);
}
//For only one technology, ignores process and use sentence as is
else{
    finalSentence = newArray[0];
}

//Sentence is sent through DOM
document.getElementById("footerSentence").innerHTML = `This page was built using: `+finalSentence;