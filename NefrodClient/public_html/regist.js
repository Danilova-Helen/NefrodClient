// объект для отправки
var user = {
    lname:$('input[name="lname"]').val(),
    fname:$('input[name="fname"]').val(),
    mname:$('input[name="mname"]').val(),
    email:$('input[name="email"]').val(),
    card:$('input[name="card"]').val(),
    mm:$('input[name="mm"]').val(),
    yy:$('input[name="yy"]').val(),
    cv:$('input[name="cv"]').val(),
    login: $('input[name="login"]').val(),
    pass:$('input[name="pass"]').val(),
};
console.log(user);
 
var json = JSON.stringify(user);
var request = new XMLHttpRequest();
request.open("POST", "localhost:8080/nefrod/registration");
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200)
            document.getElementById("output").innerHTML=request.responseText;
};
request.send(json);
 
/*var request = new XMLHttpRequest();
function reqReadyStateChange() {
    if (request.readyState == 4) {
        var status = request.status;
        if (status == 200) {
            document.getElementById("output").innerHTML=request.responseText;
        }
    }
}
// строка с параметрами для отправки
var body = "lname=" + user.lname + "&fname=" + user.fname + "&mname=" + user.mname + "&email="+user.email + "&card="+user.card + "&mm="+user.mm + "&yy="+user.yy + "&cv="+user.cv + "&login="+user.login + "&pass="+user.pass;
request.open("GET",  "localhost:8080/nefrod/login"+body);
request.onreadystatechange = reqReadyStateChange;
request.send();
*/        
