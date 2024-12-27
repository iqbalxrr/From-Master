import { useRef } from "react";



const RefForm = () => {

    const refName = useRef(null);
    const refEmail = useRef(null);
    const refNumber = useRef(null);

    const HandalSubmit = e =>{
        e.preventDefault();

        console.log(refName.current.value)
        console.log(refEmail.current.value)
        console.log(refNumber.current.value)
    }
    return (
        
        <div>
             <form  onSubmit={HandalSubmit}>

            `<input ref={refName} type="text" name="name" />
            <br/>
            <input ref={refEmail} type="email" name="email" />
            <br/>
            <input ref={refNumber} type="text" name="number" />
            <br/>
            <button type="submit">submit</button>
            </form>`
        </div>
    );
};

export default RefForm;