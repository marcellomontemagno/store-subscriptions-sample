import {createContext} from 'react';
import initialState from "./initialState"

const storeContextDefaultValue = [initialState, () => undefined]

const StoreContext = createContext(storeContextDefaultValue);

export default StoreContext;
