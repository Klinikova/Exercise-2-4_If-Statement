var $ = function (id) {
	return document.getElementById(id);
}

var processInfo = function ()
{
  var firstName = $('firstname').value;
  var age = $('age').value;
    if (age <= '40')
      {
        $('message').innerHTML =  "Keep moving " + firstName + "! It's to early to retire.";
        
      }
    else
    {
      $('message').innerHTML = firstName + " you are over " + age + "! It's time for that over-the-hill party";
    }
}

window.onload = function(){
  $("mybutton").onclick = processInfo;
}