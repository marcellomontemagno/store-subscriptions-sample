import {useCallback} from "react"
import produce from "immer"
import createUser from "../domain/createUser"
import createSection from "../domain/createSection"
import useStore from "../store/useStore"
import * as R from "ramda"
import sortPaperSections from "../utils/sortPaperSections"

const AddSectionButton = () => {

  const onClick = useCallback(() => {
    useStore.setState(produce((store) => {

      const sortedPaperSections = sortPaperSections(store.entities.sections)
      const lastPosition = R.last(sortedPaperSections).position

      //not meaningful, this is here just to simulate the need to write in different part of the store
      const creator = createUser()

      const paperSection = createSection({position: lastPosition + 1, createdBy: creator.id})
      const execSummarySection = createSection({
        type: 'summary',
        paperSectionId: paperSection.id,
        createdBy: creator.id
      })

      store.entities.users[creator.id] = creator
      store.entities.sections[paperSection.id] = paperSection
      store.entities.sections[execSummarySection.id] = execSummarySection

    }))
  }, [])

  return <button onClick={onClick}>Add section</button>
}

export default AddSectionButton
