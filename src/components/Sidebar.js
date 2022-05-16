import SidebarItem from "./SidebarItem"
import useSortedPaperSections from "../utils/useSortedPaperSections"

const Sidebar = () => {
  const sortedPaperSections = useSortedPaperSections()
  return <>
    {sortedPaperSections.map((section) => <SidebarItem key={section.id} sectionId={section.id}/>)}
  </>
}

export default Sidebar;
