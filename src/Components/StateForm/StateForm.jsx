import { useState } from "react";


const StateForm = () => {

    const [email , setEmail]= useState(null)
    const [name , setName]= useState(null)
    const [password , setPassword]= useState(null)
    const [error , setError]= useState('')

    const HandalSubmite = e =>{

        e.preventDefault();
         
        if(password.length < 6){
            setError('please set 6 charecter')
        }
        else{
            setError('')
        }

        console.log(email , name ,password)
    }

    const HandalEmail = e =>{

        setEmail(e.target.value)
    }
       
    const HandalName = e =>{

      setName(e.target.value)
    }

    const HandalPassword = e =>{

        setPassword(e.target.value)
    }
    return (
        
       <div>
           <form onSubmit={HandalSubmite}>

            <input onChange={HandalName}  type="text" name="name" />
            <br/>
            <input onChange={HandalEmail} type="email" name="email" />
            <br/>
            <input type="text" name="number" />
            <br/>
            <input onChange={HandalPassword} type="password" />
            <br />
            <button type="submit">submit</button>

            {
                error && <p>{error}</p>
            }
            </form>

       </div>
    );
};

export default StateForm;