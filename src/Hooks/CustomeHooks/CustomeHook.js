

import { useState } from "react"


const importCustomeHook = (defaultValue = null) => {

   const [value , setValue] = useState(defaultValue);

    const handalChange = e =>{

        setValue(e.target.value)

       
    }

    // return[value , handalChange]

    return{ value , handalChange}
}


export default importCustomeHook;