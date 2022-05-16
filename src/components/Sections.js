import Section from "./Section"
import useSortedPaperSections from "../utils/useSortedPaperSections"

const Sections = () => {

  const sortedPaperSections = useSortedPaperSections()

  return <>
    <h2>Sections:</h2>
    {sortedPaperSections.map((section) => <Section key={section.id} sectionId={section.id}/>)}
  </>

}

export default Sections
