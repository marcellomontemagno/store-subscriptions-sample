import {useCallback} from "react"
import produce from "immer"
import * as R from "ramda"
import createUser from "../domain/createUser"
import createSection from "../domain/createSection"
import useStore from "../store/useStore"

const AddSectionButton = () => {

  const setStore = useStore.setState

  const onClick = useCallback(() => {
    setStore(produce((store) => {

      const lastPosition = R.pipe(
        R.values,
        R.filter((s) => s.type === 'paper'),
        R.sortBy(R.prop('position')),
        R.last,
        R.prop('position')
      )(store.entities.sections)

      //not meaningful, this is here just to simulate the need to write in different part of the store
      const creator = createUser()
      store.entities.users[creator.id] = creator

      const paperSection = createSection({position: lastPosition + 1, createdBy: creator.id})
      const execSummarySection = createSection({type: 'summary', paperSectionId: paperSection.id, createdBy: creator.id})
      store.entities.sections[paperSection.id] = paperSection
      store.entities.sections[execSummarySection.id] = execSummarySection

    }))
  }, [setStore])

  return <button onClick={onClick}>Add section</button>
}

export default AddSectionButton
