import { useContext } from "react";
import { GiftContex } from "./GranPa";


const Cousin = () => {

    const gift = useContext(GiftContex);

    return (
        
        <div>
            <h2>iam iqbal cousin </h2>
            <p>my gift :{gift}</p>
        </div>
    );
};

export default Cousin;