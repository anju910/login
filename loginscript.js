var user={
    username:"luminar",
    pswd:"luminar1234",
}
    

localStorage.setItem(user.username,JSON.stringify(user))

function loginCheck(){

    let u_name=t1.value;
    let pwd=t2.value;

    let user=JSON.parse(localStorage.getItem(u_name))

    if(user==null){
        alert("invalid user")

    }
    if(user.username==u_name & user.pswd==pwd){
        alert("login success")
    }
    else{
        alert("login failed")
    }
}