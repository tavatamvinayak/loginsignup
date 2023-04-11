import React, { useState } from 'react';

const Simplesignup = () => {

  
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    // inputefieldValue onChange
    const inputFieldValues =()=>{
        console.log(e.target.name  , e.target.value)
    }

    // submit value 
    const formValues = ()=>{
        set
    }




  return (
    <>
    <form onSubmit={formValues}>
        
        <input type="email" name="email" value={Email} onChange={inputFieldValues} />
        <input type="password" name="password" value={Password} onChange={inputFieldValues} />
        <input type="submit" value="submit" />
    </form> 
    </>
  );
}

export default Simplesignup;
