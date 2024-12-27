


const From = () => {

    const HandalSubmit = e =>{
        e.preventDefault(); //ata must sob jaigei dite hobe 
        
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.number.value)
    }

    return (
       <div>
          
          <form  onSubmit={HandalSubmit}>

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

export default From;