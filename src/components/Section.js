import {useCallback, memo} from "react"
import produce from "immer"
import useStore from "../store/useStore"
import {generateKeyBetween} from 'fractional-indexing';
import sortPaperSections from "../utils/sortPaperSections"

const Section = ({sectionId}) => {

  const section = useStore((store) => store.entities.sections[sectionId])
  const creator = useStore((store) => store.entities.users[section.createdBy])

  const onChange = useCallback((event) => {
    const value = event.target.value
    useStore.setState(produce((store) => {
      store.entities.sections[sectionId].content = value
    }))
  }, [sectionId])

  const onMoveDown = useCallback(() => {
    useStore.setState(produce((store) => {

      const sortedPaperSections = sortPaperSections(store.entities.sections)

      const sectionIndex = sortedPaperSections.findIndex((section) => section.id === sectionId)
      const nextPosition = sortedPaperSections[sectionIndex + 1].position
      const nextNextPosition = sortedPaperSections[sectionIndex + 2]?.position || null

      store.entities.sections[sectionId].position = generateKeyBetween(nextPosition, nextNextPosition)

    }))
  }, [sectionId])

  const onDelete = useCallback(() => {
    useStore.setState(produce((store) => {
      delete store.entities.sections[sectionId]
    }))
  }, [sectionId])

  return <div>
    <textarea value={section.content} onChange={onChange}/>
    by {creator.firstName + ' ' + creator.lastName}
    <button onClick={onMoveDown}>move down</button>
    <button onClick={onDelete}>delete</button>
  </div>
}

export default memo(Section)
