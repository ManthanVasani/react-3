import {useState} from "react";
function useCustomCounter() {
    const [id,setId] = useState(0);
    const idIncrement = () => {
        setId(id+1);
    };
    return{
        id,
        idIncrement
    }

};

export default useCustomCounter;