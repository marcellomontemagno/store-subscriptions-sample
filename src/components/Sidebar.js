import * as R from "ramda"
import SidebarItem from "./SidebarItem"
import useStore from "../store/useStore"

const Sidebar = () => {

  const sections = useStore((store) => store.entities.sections)

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
