window.onload = () =>{
  const register = document.querySelector('#register')

  register.addEventListener('click', ()=>{
    const usernames = document.querySelector('#registerusernames').value.trim()
    const passwords = document.querySelector('#registerpasswords').value.trim()
    console.log(usernames)
    console.log(passwords)
    let userinfo = {
      usernames,
      passwords,
    }
    console.log(userinfo)
  })
}