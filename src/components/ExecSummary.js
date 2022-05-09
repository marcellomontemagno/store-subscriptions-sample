import {useCallback, useContext, useMemo} from "react"
import StoreContext from "../store/StoreContext"
import * as R from "ramda"
import produce from "immer"
import ExecSummarySection from "./ExecSummarySection"

const ExecSummary = () => {

  const [store] = useContext(StoreContext)

  const sections = store.entities.sections

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
