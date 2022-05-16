import * as R from "ramda"
import ExecSummarySection from "./ExecSummarySection"
import useStore from "../store/useStore"

const ExecSummary = () => {

  const sections = useStore((store) => store.entities.sections)

  const sortedPaperSections = R.pipe(
    R.values,
    R.filter((s) => s.type === 'paper'),
    R.sortBy(R.prop('position'))
  )(sections)

  const execSummarySectionsByPaperSectionId = R.pipe(
    R.values,
    R.filter((s) => s.type === 'summary'),
    R.indexBy(R.prop('paperSectionId'))
  )(sections)

  return <>
    <h2>Exec Summary:</h2>
    {sortedPaperSections.map((section) => {
      const execSummarySection = execSummarySectionsByPaperSectionId[section.id]
      return <ExecSummarySection key={section.id} sectionId={execSummarySection.id}/>
    })}
  </>

}


export default ExecSummary
