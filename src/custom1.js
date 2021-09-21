import {useState} from "react";
function useCustomDecr(){
    const [id1,setId1] = useState(50);
    const idDecrement = () => {
        setId1(id1-1);
    };
    return{
        id1,
        idDecrement
    }
}

export default useCustomDecr;