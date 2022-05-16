import sortPaperSections from "./sortPaperSections"
import useStore from "../store/useStore"

const useSortedPaperSections = () => {
  const sections = useStore((store) => store.entities.sections)
  return sortPaperSections(sections)
}

export default useSortedPaperSections
