import {useCallback, memo} from "react"
import {useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"
import {sectionAtom, sectionIdsAtom, userAtom} from "../store/atoms"
import {generateKeyBetween} from 'fractional-indexing';
import sortedPaperSectionsSelector from "../store/sortedPaperSectionsSelector"

const Section = ({sectionId}) => {

  const setSectionIdsAtom = useSetRecoilState(sectionIdsAtom)
  const [section, setSection] = useRecoilState(sectionAtom({id: sectionId}))
  const creator = useRecoilValue(userAtom({id: section.createdBy}))

  const onChange = useCallback((event) => {
    const value = event.target.value
    setSection((section) => {
      return {
        ...section,
        content: value
      }
    })
  }, [setSection])

  const onMoveDown = useRecoilCallback(({snapshot, set}) => () => {

    const sortedPaperSections = snapshot.getLoadable(sortedPaperSectionsSelector).contents

    const sectionIndex = sortedPaperSections.findIndex((section) => section.id === sectionId)
    const nextPosition = sortedPaperSections[sectionIndex + 1].position
    const nextNextPosition = sortedPaperSections[sectionIndex + 2]?.position || null

    set(sectionAtom({id: sectionId}), (section) => ({
      ...section,
      position: generateKeyBetween(nextPosition, nextNextPosition)
    }))

  }, [sectionId])

  const onDelete = useCallback(() => {
    setSectionIdsAtom((sectionIds) => {
      return sectionIds.filter((el) => el !== sectionId)
    })
    //todo I'd also need to remove the atom, "deleted" atoms are a memory leak in this example right now
  }, [setSectionIdsAtom, sectionId])

  return <div>
    <textarea value={section.content} onChange={onChange}/>
    by {creator.firstName + ' ' + creator.lastName}
    <button onClick={onMoveDown}>move down</button>
    <button onClick={onDelete}>delete</button>
  </div>
}

/*
//alternative implementation using ref, notice that this is less optimised than useRecoilCallback as MoveDownButton would render more according to its atoms
const MoveDownButton = ({sectionId}) => {

  const sortedPaperSections = useRecoilValue(sortedPaperSectionsSelector);
  const sortedPaperSectionsRef = useRef()
  sortedPaperSectionsRef.current = sortedPaperSections

  const setSection = useSetRecoilState(sectionAtom({id: sectionId}))

  const onMoveDown = useCallback(() => {

    const sortedPaperSections = sortedPaperSectionsRef.current

    const sectionIndex = sortedPaperSections.findIndex((section) => section.id === sectionId)
    const nextPosition = sortedPaperSections[sectionIndex + 1].position
    const nextNextPosition = sortedPaperSections[sectionIndex + 2]?.position || null
    const newPosition = generateKeyBetween(nextPosition, nextNextPosition)

    setSection((section) => {
      return {...section, position: newPosition}
    })

  }, [sectionId, setSection])

  return <button onClick={onMoveDown}>move down</button>

}
*/

export default memo(Section)
