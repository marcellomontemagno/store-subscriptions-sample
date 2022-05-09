import {useContext} from "react"
import StoreContext from "../store/StoreContext"
import * as R from "ramda"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {

  const [store] = useContext(StoreContext)

  const sections = store.entities.sections

  const sortedPaperSections = R.pipe(
    R.values,
    R.filter((s) => s.type === 'paper'),
    R.sortBy(R.prop('position'))
  )(sections)

  return <>
    {sortedPaperSections.map((section) => <SidebarItem key={section.id} sectionId={section.id}/>)}
  </>
}

export default Sidebar;
