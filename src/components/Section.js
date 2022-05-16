import {useCallback, memo} from "react"
import produce from "immer"
import useStore from "../store/useStore"

const Section = ({sectionId}) => {

  const section = useStore((store) => store.entities.sections[sectionId])
  const creator = useStore((store) => store.entities.users[section.createdBy])

  const setStore = useStore.setState
  
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

export default memo(Section)
