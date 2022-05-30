import SidebarItem from "./SidebarItem"
import {useRecoilValue} from "recoil"
import sortedPaperSectionsSelector from "../store/sortedPaperSectionsSelector"

const Sidebar = () => {
  const sortedPaperSections = useRecoilValue(sortedPaperSectionsSelector);
  return <>
    {sortedPaperSections.map((section) => <SidebarItem key={section.id} sectionId={section.id}/>)}
  </>
}

export default Sidebar;
