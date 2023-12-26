import React, { useState } from 'react';
//import './form.css';
//IN THIS FILE, I CAN INPUT NAME, EMAIL, CREATE PASSWORD, AND IT WILL BE SEEN IN FIREBASE AND JSON FILE
const InstructorSignUp = () => {
    const [user, setUser] = useState(
        {
            Name: '', Email: '', CreatePassWord: '', ConfirmPassWord: ''
        }
    )
    let name, value
    const data = (e) =>
    {
        console.log(user)
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
    }
    const getdata = async (e) => {
        
        const { Name, Email, CreatePassWord, ConfirmPassWord } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name, Email, CreatePassWord, ConfirmPassWord,
            }),
        };
        const res= await fetch(
            'https://jalalquiz-default-rtdb.firebaseio.com//UserData.json', options
        );
    if (res.ok)
    {
        alert("Message Sent");
    }
    else
    {
        alert("Error Occured");
    }
    };
    return (
        <>
        <div className='form'>
            <div className='container'>
                <form method='POST'>
                    <input type='text' name='Name' placeholder='Your Name' value={user.Name} autoComplete='off' required onChange={data}></input>
                    <input type='email' name='Email' placeholder='Email' value={user.Email} autoComplete='off' required onChange={data}></input>
                    <input type='text' name='CreatePassWord' placeholder='Create Password' value={user.CreatePassWord} autoComplete='off' required onChange={data}></input>
                    <input type='text' name='ConfirmPassWord' placeholder='Confirm Password' value={user.ConfirmPassWord} autoComplete='off' required onChange={data}></input>
                    <button onClick={getdata}> Submit</button>

                </form>
            </div>
        </div>

        </>
    );
};
export default InstructorSignUp;