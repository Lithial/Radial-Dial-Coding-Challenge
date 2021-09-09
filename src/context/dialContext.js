import React, {useContext, useState} from 'react';

/*
 I created this context to support dynamically adding indicators
 This seemed better than having a JSON list and uncommenting stuff
 to update stuff
*/
const DialContext = React.createContext([]);

/*
This lets you call the context on other classes.
When you want to use this context call
const {} = useDial() and use destructuring to pull the data
or function you want.
Options:
- indicators
- addIndicator
- removeIndicator
*/
export function useDial(){
    return useContext(DialContext);
}

/*
This is the context provider. Surround the component you want to access this
with this component. Works for all items in tree below so you can put it
at the top of your application.
*/
export const DialProvider = ({children}) => {
    const initialState =  [ "unlit"]
    const [indicators,setIndicators] = useState(initialState);
    /*
    Function to add to the list in the state. Takes in a string,
    either "unlit", "lit" or "red" depending on the indicator.
    * */
    const addIndicator = (type) => {
        let array = [...indicators];
        array.push(type);
        setIndicators(array);
    }
    /*
    Remove the last indicator from the list. I considered taking specific
    items from the array but I decided it was not required at this time.
    */
    const removeIndicator = () => {
        let array = [...indicators];
        array.pop();
        setIndicators(array);
    }
    /*Returns the provider*/
    return (
        <DialContext.Provider value={{indicators, addIndicator,removeIndicator}}>
            {children}
        </DialContext.Provider>
    )
};

export default DialProvider;