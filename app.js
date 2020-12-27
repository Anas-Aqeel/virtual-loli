function picker(){
    var first = document.getElementById("first").value
    var second = document.getElementById("second").value
    var third = document.getElementById("third").value
   var fdiv = document.getElementById("fdiv")
   var sdiv = document.getElementById("sdiv")
   var tdiv = document.getElementById("tdiv")
   fdiv.style.backgroundColor = first
   sdiv.style.backgroundColor = second
   tdiv.style.backgroundColor = third
 }
 picker()
 
  function night() {
      var body = document.getElementById("body")
      body.className = "mode1"
      var light = document.getElementById("light")
      light.className = ""
      var night = document.getElementById("night")
      night.className = "hidden";
 
  }
 function light() {
     var body = document.getElementById("body")
      body.className = ""
      var light = document.getElementById("light")
      light.className = "hidden"
      var night = document.getElementById("night")
      night.className = "";
 }