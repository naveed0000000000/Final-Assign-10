import React from 'react'

const Login = () => {
  return (
    <div className="Main">

<div className="Text">
<br></br>
<h2>Sign Up</h2>
<label>
<p>You are already a member?<a href="#">  sign in</a></p>
</label>

<label>
    <a>Name</a>
    <input type="text " className="name" placeholder="write your name here"></input>
</label>

<br></br>
<br></br>

<label>
    <a>Password </a>
    <input type="password " className="password" placeholder="write your password here"></input>
</label>

<br></br>
<br></br>

<label>
    <a>Email</a>
    <input type="email" className="email" placeholder="write your email here"></input>
</label>

<br></br>
<br></br>

<label className="checkbox">
<input type="checkbox"></input>
<a>By agreeing you will be the member of this site?</a>
</label>

<br></br>
<br></br>
<br></br>
<br></br>


<button>
    Sign in
</button>





</div>





<div className='pic'>

<img src="https://img.lovepik.com/element/45009/2341.png_860.png" alt="pic"></img>

</div>
      


    </div>
  )
}

export default Login
