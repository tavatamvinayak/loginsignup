import React from 'react'

function Simplesignup() {


  const inputField =(e)=>{
    console.log(e.target.name , e.target.value)
  }
  const SendDataForm =(e)=>{
    e.preventDefault();


  }
  return (
    <div>
      <form action="" onSubmit={SendDataForm} method='post'>
        <input type="text"    name="UserName"         onChange={inputField} placeholder='User Name' />
        <input type="email"   name="UserEmail"        onChange={inputField} placeholder='User Email' />
        <input type="text"    name="UserPassword"     onChange={inputField} placeholder='User Password' />
        <input type="submit"  value='submit' />
      </form>
    </div>
  )
}

export default Simplesignup;
