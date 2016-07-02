// Go to Page
// Load as many post you can load 
// Go to Console and paste code below this line and press enter

var x = document.getElementsByTagName('a');
for(i=0;i<x.length;i++){
if(x[i].innerHTML.indexOf("Like") != -1)
x[i].click();
}
