import {useCallback, useContext, useMemo} from "react"
import StoreContext from "../store/StoreContext"
import produce from "immer"

const ExecSummarySection = ({sectionId}) => {

  const [store, setStore] = useContext(StoreContext)
  const {sections, users} = store.entities
  const section = sections[sectionId]
  const creator = users[section.createdBy]

  const paperSectionContent = sections[section.paperSectionId].content

  const heading = useMemo(() => {
    return paperSectionContent.split('\n')[0];
  }, [paperSectionContent])

  const onChange = useCallback((event) => {
    const value = event.target.value
    setStore(produce((store) => {
      store.entities.sections[sectionId].content = value
    }))
  }, [setStore, sectionId])

  return <div>
    <h4>{heading}</h4>
    <textarea value={section.content} onChange={onChange}/>
    by {creator.firstName + ' ' + creator.lastName}
  </div>
}

export default ExecSummarySection
