var cicrle = "<div class='cirClass'></div>";



function load_home (e) {
   (e || window.event).preventDefault();
   var con = document.getElementsByTagName('body')
   ,   xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function (e) { 
    if (xhr.readyState == 4 && xhr.status == 200) {
     con.innerHTML = xhr.responseText;
    }
   }

 xhr.open("GET", "../data/content.html", true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
}


window.onload = document.getElementById('id01').style.display='block';