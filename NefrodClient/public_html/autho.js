window.onload = function() {
    var btn = document.getElementById("btn");
    btn.onclick = function() {
        var user = {
            login: $('input[name="login"]').val(),
            pass: $('input[name="pass"]').val()
        };
        var json = JSON.stringify(user);
       /* var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "localhost:8080/nefrod/frod/login", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
            }
        };
        xhttp.send("fname=Henry&lname=Ford");*/

        $.ajax({
         type: "POST",
         url: "localhost:8080/nefrod/login",
         data: user,
         contentType: "application/json; charset=utf-8",
         success: function(reply) {
         if (reply !== null) {
         //window.location.href = "http://example.com/ma.html";
         console.log(reply);
         } else {
         window.alert(reply);
         }
         },
         dataType: "json"
         });
    };
};