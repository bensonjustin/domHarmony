/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var spanBox = document.getElementById("matCount");
spanBox.innerHTML = 11;
//or
matCount.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var counter = document.getElementById('msgCount');
counter.innerHTML = 23;
//or
msgCount.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var nameBox = document.getElementById('fullname');
nameBox.innerHTML = "Ronald McDonald";
//or
fullname.innerHTML = "Ronald McDonald";

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var ageBox = document.getElementById("age");
ageBox.innerHTML = "63 Years Old";
//or
age.innerHTML = "63 Years Old";

//5. In the div id data section, create a div with an id of job and give it the () information: Clown and Restauranteur.

var jobBox  = document.createElement("div");
jobBox.id = "job";
jobBox.innerHTML = "Clown and Restauranteur";
data.appendChild(jobBox);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var hobbiesBox = document.createElement("div");
hobbiesBox.id = "hobbies";
hobbiesBox.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.";
data.appendChild(hobbiesBox);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var locationBox = document.createElement("location");
locationBox.id = "location";
locationBox.innerHTML = "Honolulu, HI";
data.appendChild(locationBox);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var wantsBox = document.createElement("wants");
wantsBox.id = "wants";
wantsBox.innerHTML = "Looking for a Mrs. McDonald";
data.appendChild(wantsBox);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var pro2Box = document.createElement("pro2");
pro2Box.id = "pro2";
pro2Box.innerHTML = "Likes to eat hamburgers. Likes to scare kids."
profile.appendChild(pro2Box);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var firstNameBox = document.getElementsByClassName("firstName");
firstNameBox[0].innerHTML = "Wendy";

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var otherAgeBox = document.getElementsByClassName("otherAge");
otherAgeBox[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var statusBox = document.getElementsByClassName("status");
statusBox[0].innerHTML = "Single Mother";

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

firstNameBox[1].innerHTML = "Peko Chan";

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

otherAgeBox[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile

var otherImg = document.getElementsByClassName("other");
otherImg[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Oc2XBQEN3fiJFpZLDuI5x-Lu34duAXHXgvL3h2okN16YJNYaqg";

 //div with class name of firstName

firstNameBox[2].innerHTML = "Bugs Bunny";

 //div with class name of otherAge

otherAgeBox[2].innerHTML = 79;

 //div with class name of status

statusBox[2].innerHTML = "Single and ready to mingle"

 //div with class anem of Motto

 var mottoBox = document.getElementsByClassName("motto");
mottoBox[2].innerHTML = "What's up Doc?";