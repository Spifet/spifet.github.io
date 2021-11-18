/*These const reduce the code length to call the input through the IDs*/
const firstName = document.querySelector('#firstName');
const email = document.querySelector('#email');
const comments = document.querySelector('#comments');
const gmt = document.querySelector('#gmt');
const button = document.querySelector('button');

/*  4 IFs to validate the 4 required fields
    Form accepts: 
 1) Any First Name
 2) Any GMT time between the real valid range of -12 to +14
 3) Any email with .com and .co domains with minimum 7 Index length
 4) Any commentary of any amount */

firstName.addEventListener("blur", function() {if(firstName.value.length>0&&comments.value.length>0&&gmt.value.length>0&&email.value.search("@")&&email.value.search(".com")&&email.value.length>=7){
    button.disabled = false;
    button.style.opacity = 1;
                                }});
email.addEventListener("blur", function() {if(firstName.value.length>0&&comments.value.length>0&&gmt.value.length>0&&email.value.search("@")&&email.value.search(".com")&&email.value.length>=7){
        button.disabled = false;
        button.style.opacity = 1;
                                    }});
gmt.addEventListener("blur", function() {if(firstName.value.length>0&&comments.value.length>0&&gmt.value.length>0&&email.value.search("@")&&email.value.search(".com")||email.value.search(".co")&&email.value.length>=7){
        button.disabled = false;
        button.style.opacity = 1;
}});
comments.addEventListener("blur", function() {if(firstName.value.length>0&&comments.value.length>0&&gmt.value.length>0&&email.value.search("@")&&email.value.search(".com")&&email.value.length>=7){
    button.disabled = false;
    button.style.opacity = 1;
}});
