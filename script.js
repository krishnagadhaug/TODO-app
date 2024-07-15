function login(callback){
let username = document.getElementById('uname').value
let pswd = document.getElementById('password').value
console.log(username, pswd);
if(username=='admin' && pswd=='12345'){
    callback()
}
}

function redirect(){
    window.location.href = "index2.html";    
}
