function randomString() {  
//define a variable consisting alphabets in small and capital letter  
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*()";  
//specify the length for the new string  
var lenString = document.getElementById("numInput").value;
console.log(lenString);
var randomstring = '';  

//loop to select a new character in each iteration  
if (lenString.length == 0){
    alert("Please enter a number"); 
} else {
    for (var i=0; i<lenString; i++) {  
        var rnum = Math.floor(Math.random() * characters.length);  
        randomstring += characters.substring(rnum, rnum+1);  
    }  
}

//display the generated string   
document.getElementById("randomfield").innerHTML = randomstring;  
}  


async function copyText() {
    var results = document.getElementById("randomfield")[0].innerHTML;
    try {
      await navigator.clipboard.writeText(results);
      alert("Copied the text: " + randomstring);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }