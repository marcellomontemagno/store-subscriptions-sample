import * as R from "ramda"
import createUser from "../domain/createUser"
import createSection from "../domain/createSection"
import {useRecoilCallback} from "recoil"
import {sectionAtom, sectionIdsAtom, userAtom, userIdsAtom} from "../store/atoms"
import sortedPaperSectionsSelector from "../store/sortedPaperSectionsSelector"

const AddSectionButton = () => {

  const onClick = useRecoilCallback(({snapshot, set}) => () => {

    const sortedPaperSections = snapshot.getLoadable(sortedPaperSectionsSelector).contents
    const lastPosition = R.last(sortedPaperSections).position

    //not meaningful, this is here just to simulate the need to write in different part of the store
    const creator = createUser()

    const paperSection = createSection({position: lastPosition + 1, createdBy: creator.id})
    const execSummarySection = createSection({
      type: 'summary',
      paperSectionId: paperSection.id,
      createdBy: creator.id
    })

    sectionAtom(paperSection)
    sectionAtom(execSummarySection)
    userAtom(creator)

    set(sectionIdsAtom, (sectionIds) => [...sectionIds, paperSection.id, execSummarySection.id])
    set(userIdsAtom, (userIds) => [...userIds, creator.id])

  }, [])

  return <button onClick={onClick}>Add section</button>
}

/*
//this is an alternative implementation not using useRecoilCallback
const AddSectionButton = () => {

  const sortedPaperSections = useRecoilValue(sortedPaperSectionsSelector)
  const lastPositionRef = useRef()
  lastPositionRef.current = R.last(sortedPaperSections).position

  const setSectionIdsAtom = useSetRecoilState(sectionIdsAtom)
  const setUserIdsAtom = useSetRecoilState(userIdsAtom)

  const onClick = useCallback(() => {

    //not meaningful, this is here just to simulate the need to write in different part of the store
    const creator = createUser()

    const paperSection = createSection({position: lastPositionRef.current + 1, createdBy: creator.id})
    const execSummarySection = createSection({
      type: 'summary',
      paperSectionId: paperSection.id,
      createdBy: creator.id
    })

    sectionAtom(paperSection)
    sectionAtom(execSummarySection)
    userAtom(creator)

    setSectionIdsAtom((sectionIds) => ([...sectionIds, paperSection.id, execSummarySection.id]))
    setUserIdsAtom((userIds) => [...userIds, creator.id])

  }, [setSectionIdsAtom, setUserIdsAtom])

  return <button onClick={onClick}>Add section</button>
}
*/

export default AddSectionButton
