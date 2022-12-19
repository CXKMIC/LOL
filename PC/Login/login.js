window.onload = ()=> {
  const loginusername = document.querySelector(".signIn").querySelector('#username').value.trim()
  const loginpassword = document.querySelector(".signIn").querySelector('#password').value.trim()
  const login = document.querySelector("#login")
  login.onclick = () => {
    const realuser = localStorage.getItem('1')
    console.log(realuser)
  }
}