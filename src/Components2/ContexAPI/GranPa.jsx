import { createContext  } from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Unte from "./Untei";

 export const GiftContex = createContext('this is a golden ring');

const GranPa = () => {

    

    return (
        <div>
         <GiftContex.Provider value="golden ring"> 
            {/* value must dite hobe and value could br anything like arrya obj string so all  */}

           <Dad></Dad>
           <Uncle></Uncle>
           <Unte></Unte>

         </GiftContex.Provider>
        </div>
        
    );
};

export default GranPa;


                         // Contex-API

/*
 * at first a akya contex create korte hobe  
 * 
 * second  ja contex create korbop tar akta provider add korte hobe  and value must use korte hobe and value ja kono kiso hote pare [arry , obj , string , null , eampty etc]
 * 
 * third contex provider are vitor a sokol childern ke bosate hobe
 * 
 * forth jekhan a use korbo sekhan a usecontex diya oi contex ke call korte hobe 
 * 
 * */ 
