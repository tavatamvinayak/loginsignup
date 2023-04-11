import React, { useEffect, useState } from 'react';


const Simplelogin = () => {
    const [Fname, setFname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Form, setForm] = useState();


    
    // inputefieldValue onChange
    const inputFieldValues =(e)=>{
       
        setForm({
            ...Form, 
            [e.target.name] : e.target.value
        })
    }
  

    // submit value 
    const formValues = async(e)=>{
        e.preventDefault();

       

        const responese = await fetch('http://localhost:8080/' ,{
            method: 'post',
            body:JSON.stringify(Form)
            ,headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await responese.json()
        console.log(data)

        useEffect(() => {
        responese(data)
    }, []);

    }
    
    return (
        <>
            <div>
                <form onSubmit={formValues}>
                    <input type="text"          name="Fname"             onChange={inputFieldValues} />
                    <input type="email"         name="Email"            onChange={inputFieldValues} />
                    <input type="password"      name="Password"      onChange={inputFieldValues} />
                    <input type="submit"        value="submit" />
                </form>

                <p>{JSON.stringify(Form)}</p>
            </div>
        </>
    );
}

export default Simplelogin;
