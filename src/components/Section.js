import {useCallback, memo} from "react"
import produce from "immer"
import useStore from "../store/useStore"

const Section = ({sectionId}) => {

  console.log('section render, sectionId', sectionId)

  const {section, creator} = useSection({sectionId})

  const onChange = useCallback((event) => {
    const value = event.target.value
    updateSectionContent({sectionId, value})
  }, [sectionId])

  return <div>
    <textarea value={section.content} onChange={onChange}/>
    by {creator.firstName + ' ' + creator.lastName}
  </div>
}

const useSection = ({sectionId}) => {

  console.log('useSection', sectionId)

  const section = useStore((store) => store.entities.sections[sectionId])
  const creator = useStore((store) => store.entities.users[section.createdBy])
  return {section, creator}
}

const updateSectionContent = ({sectionId, value}) => {
  useStore.setState(produce((store) => {
    store.entities.sections[sectionId].content = value
  }))
}


export default memo(Section)
