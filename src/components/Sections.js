import {useContext} from "react"
import StoreContext from "../store/StoreContext"
import * as R from "ramda"
import Section from "./Section"

const Sections = () => {

  const [store] = useContext(StoreContext)

  const sections = store.entities.sections

  const sortedPaperSections = R.pipe(
    R.values,
    R.filter((s) => s.type === 'paper'),
    R.sortBy(R.prop('position'))
  )(sections)

  return <>
    <h2>Sections:</h2>
    {sortedPaperSections.map((section) => <Section key={section.id} sectionId={section.id}/>)}
  </>

}

export default Sections
