import {useCallback, useContext} from "react"
import StoreContext from "../store/StoreContext"
import produce from "immer"

const Section = ({sectionId}) => {

  const [store, setStore] = useContext(StoreContext)
  const {sections, users} = store.entities
  const section = sections[sectionId]
  const creator = users[section.createdBy]

  const onChange = useCallback((event) => {
    const value = event.target.value
    setStore(produce((store) => {
      store.entities.sections[sectionId].content = value
    }))
  }, [setStore, sectionId])

  return <div>
    <textarea value={section.content} onChange={onChange}/>
    by {creator.firstName + ' ' + creator.lastName}
  </div>
}

export default Section
