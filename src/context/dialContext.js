import React, {useContext, useState} from 'react';

const DialContext = React.createContext([]);

export function useDial(){
    return useContext(DialContext);
}
export const DialProvider = ({children}) => {
    const initialState =  [ "unlit"]
    const [indicators,setIndicators] = useState(initialState);
    console.log("initial State:", initialState)
    const addIndicator = (type) => {
        let array = [...indicators];
        array.push(type);
        setIndicators(array);
    }
    const removeIndicator = () => {
        let array = [...indicators];
        array.pop();
        setIndicators(array);
    }
    return (
        <DialContext.Provider value={{indicators, addIndicator,removeIndicator}}>
            {children}
        </DialContext.Provider>
    )
};

export default DialProvider;