document.getElementById("btn-update-title").addEventListener('click',function(){
    const pageTitle =  document.getElementById('title');
    pageTitle.innerText = "Updated";
})

document.getElementById("btn-login").addEventListener('click',function(){
    const userInfo = document.getElementById("user-info");
    userInfo.innerText = "User Logged in Successfully"
})

document.getElementById("btn-update").addEventListener('click',function(){
    // get the text from input field
    const nameInput = document.getElementById("input-name");
    //console.log(nameInput)
    
    const name = nameInput.value;
    //console.log(name)

    //set the name
    const para = document.getElementById("name");
    para.innerText = name
})