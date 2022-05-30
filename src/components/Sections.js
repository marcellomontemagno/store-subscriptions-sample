import Section from "./Section"
import {useRecoilValue} from "recoil"
import sortedPaperSectionsSelector from "../store/sortedPaperSectionsSelector"

const Sections = () => {
  const sortedPaperSections = useRecoilValue(sortedPaperSectionsSelector);
  return <>
    <h2>Sections:</h2>
    {sortedPaperSections.map((section) => <Section key={section.id} sectionId={section.id}/>)}
  </>

}

export default Sections
