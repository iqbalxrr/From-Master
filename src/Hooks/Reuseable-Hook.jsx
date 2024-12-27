

import { Children } from "react";


const Reuseable = ({FormTitle , HandalSubmit , Children }) => {

    // const HandalSubmit = (e) => {
       
    //     e.preventDefault();

    const HandalLocalSubmit = e => {

        e.preventDefault()

        const data = {
         
            name: e.target.name.value,
            email: e.target.email.value,
            number:e.target.number.value

        }
        HandalSubmit(data)
    }

    return (

       <div>
           
          {/* <h1>{FormTitle}</h1> */}

          {Children}
            
          <form  onSubmit={HandalLocalSubmit}>

            <input type="text" name="name" />
            <br/>
            <input type="email" name="email" />
            <br/>
            <input type="text" name="number" />
            <br/>
            <button type="submit">submit</button>

          </form>
       </div> 
        
    );
};

export default Reuseable;