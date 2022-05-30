import {useCallback, useMemo, memo} from "react"
import {useRecoilState, useRecoilValue} from "recoil"
import {sectionAtom, userAtom} from "../store/atoms"

const ExecSummarySection = ({sectionId}) => {

  const [section, setSection] = useRecoilState(sectionAtom({id: sectionId}))
  const creator = useRecoilValue(userAtom({id: section.createdBy}))
  const paperSectionContent = useRecoilValue(sectionAtom({id: section.paperSectionId})).content

  const heading = useMemo(() => {
    return paperSectionContent.split('\n')[0];
  }, [paperSectionContent])

  const onChange = useCallback((event) => {
    const value = event.target.value
    setSection((section) => {
      return {
        ...section,
        content: value
      }
    })
  }, [setSection, sectionId])

  return <div>
    <h4>{heading}</h4>
    <textarea value={section.content} onChange={onChange}/>
    by {creator.firstName + ' ' + creator.lastName}
  </div>
}

export default memo(ExecSummarySection)
