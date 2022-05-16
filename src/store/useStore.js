import create from 'zustand'

import initialState from "./initialState"

const useStore = create((set) => initialState)

export default useStore
