// Use this script to send request to group of a specific category
// 1. Search for categroy on Facebook
// 2. Filter by Groups by clicking on Groups
// 3. Paste the code below this line in console and press enter

setInterval(function(){window.scrollTo(0,document.body.scrollHeight);var z = document.getElementsByTagName('a');
for(i=0;i<z.length;i++){
if(z[i].getAttribute("data-bt")=='{"ct":"join_group"}')
z[i].click();

if(z[i].getAttribute('action')=='cancel')
z[i].click();
}


},5000);

// this will click on Join and automatically load more groups within the search

