import {memo, useCallback, useMemo} from "react"
import produce from "immer"
import useStore from "../store/useStore"

const ExecSummarySection = ({sectionId}) => {

  const section = useStore((store) => store.entities.sections[sectionId])
  const creator = useStore((store) => store.entities.users[section.createdBy])
  const paperSectionContent = useStore((store) => store.entities.sections[section.paperSectionId].content)

  const heading = useMemo(() => {
    return paperSectionContent.split('\n')[0];
  }, [paperSectionContent])

  const onChange = useCallback((event) => {
    const value = event.target.value
    useStore.setState(produce((store) => {
      store.entities.sections[sectionId].content = value
    }))
  }, [sectionId])

  return <div>
    <h4>{heading}</h4>
    <textarea value={section.content} onChange={onChange}/>
    by {creator.firstName + ' ' + creator.lastName}
  </div>
}

/*
  //alternative selector implementation
  const {section, paperSectionContent, creator} = useStore((store) => {
    const sections = store.entities.sections
    const section = sections[sectionId]
    return {
      section,
      paperSectionContent: sections[section.paperSectionId].content,
      creator: store.entities.users[section.createdBy]
    }
  }, shallow)
*/

export default memo(ExecSummarySection)
