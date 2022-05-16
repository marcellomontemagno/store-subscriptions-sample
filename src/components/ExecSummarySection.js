import {memo, useCallback, useMemo} from "react"
import produce from "immer"
import useStore from "../store/useStore"
import shallow from "zustand/shallow"

const ExecSummarySection = ({sectionId}) => {

  const {section, paperSectionContent, creator} = useStore((store) => {
    const sections = store.entities.sections
    const section = sections[sectionId]
    return {
      section,
      paperSectionContent: sections[section.paperSectionId].content,
      creator: store.entities.users[section.createdBy]
    }
  }, shallow)

  const setStore = useStore.setState

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

export default memo(ExecSummarySection)
