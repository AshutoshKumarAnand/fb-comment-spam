// Click on Friend Request Notication 
// Click on See all request
// Load all friend requests
// Open console by pressing Ctrl+Shift+I or Right Click -> Inspect Element -> Console
// Enter this code and press enter

x = document.getElementsByTagName("button");
for(i=0;i<x.length;i++){
if(x[i].innerHTML=="Confirm")
x[i].click();
}
