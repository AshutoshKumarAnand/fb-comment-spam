// Invite All Friends to Like the page
// Go to your Page
// Click on Invite all friends
// Scroll down and load as many friends you can 
// Open Ctrl+shif+I to open console on Chrome or
// Right Click  -> Inspect Element -> Console
// Paste the code below this line and press enter

var x = document.getElementsByTagName('span');
for(i=0;i<x.length;i++){
if(x[i].innerHTML == "Invite")
x[i].click();
}

// Your Browser may hang for a while. Do not close the window untill it becomes responsive again

