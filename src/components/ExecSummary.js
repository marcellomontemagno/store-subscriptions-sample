import * as R from "ramda"
import ExecSummarySection from "./ExecSummarySection"
import {selector, useRecoilValue} from "recoil"
import {sectionAtom, sectionIdsAtom} from "../store/atoms"
import sortedPaperSectionsSelector from "../store/sortedPaperSectionsSelector"

export const execSummarySectionsByPaperSectionIdSelector = selector({
  key: "execSummarySectionsByPaperSectionIdSelector",
  get: ({get}) => {
    const sectionsIds = get(sectionIdsAtom);
    const sections = sectionsIds.map((id) => get(sectionAtom({id})))
    return R.pipe(
      R.filter((s) => s.type === 'summary'),
      R.indexBy(R.prop('paperSectionId'))
    )(sections)
  }
});

const ExecSummary = () => {

  const sortedPaperSections = useRecoilValue(sortedPaperSectionsSelector);
  const execSummarySectionsByPaperSectionId = useRecoilValue(execSummarySectionsByPaperSectionIdSelector);

  return <>
    <h2>Exec Summary:</h2>
    {sortedPaperSections.map((section) => {
      const execSummarySection = execSummarySectionsByPaperSectionId[section.id]
      return <ExecSummarySection key={execSummarySection.id} sectionId={execSummarySection.id}/>
    })}
  </>

}


export default ExecSummary
