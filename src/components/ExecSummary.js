import * as R from "ramda"
import ExecSummarySection from "./ExecSummarySection"
import useStore from "../store/useStore"
import useSortedPaperSections from "../utils/useSortedPaperSections"

const useExecSummarySectionsByPaperSectionId = () => {
  const sections = useStore((store) => store.entities.sections)
  return R.pipe(
    R.values,
    R.filter((s) => s.type === 'summary'),
    R.indexBy(R.prop('paperSectionId'))
  )(sections)
}

const ExecSummary = () => {

  const sortedPaperSections = useSortedPaperSections()
  const execSummarySectionsByPaperSectionId = useExecSummarySectionsByPaperSectionId()

  return <>
    <h2>Exec Summary:</h2>
    {sortedPaperSections.map((section) => {
      const execSummarySection = execSummarySectionsByPaperSectionId[section.id]
      return <ExecSummarySection key={section.id} sectionId={execSummarySection.id}/>
    })}
  </>

}


export default ExecSummary
