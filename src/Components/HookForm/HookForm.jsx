
import importCustomeHook from "../../Hooks/CustomeHooks/CustomeHook"


const HookForm = () => {

    // const [value , handalChange] =  importCustomeHook();

    const inputState = importCustomeHook();

    const HandalSubmit = (e) =>{
        e.preventDefault();
       console.log(inputState.value)

    }
    return (
        
       <div>
          <form onSubmit={HandalSubmit}>

            <input {...inputState} type="text" name="name" />
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

export default HookForm;