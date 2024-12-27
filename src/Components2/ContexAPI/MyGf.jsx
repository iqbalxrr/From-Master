import { useContext } from "react";
import { GiftContex } from "./GranPa";



const MyGf = () => {

    const gift = useContext(GiftContex);

    return (

    <div>
        <h2>my gof</h2>
        <p>your gift: {gift} </p>
    </div>     
        
    );
};

export default MyGf;