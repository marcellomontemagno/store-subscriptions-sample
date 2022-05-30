import {memo} from "react"
import {selectorFamily, useRecoilValue} from "recoil"
import {sectionAtom} from "../store/atoms"

//not implemented as useRecoilValue + useMemo to show selectorFamily (selectorFamily is arguably not very useful as I'm guessing using atoms directly would be more granular and optimal)
//example of selector depending on props, doesn't replace useMemo use case, useMemo optimisations could be more granular (e.g running only if .content changes)
const sectionHeadingSelector = selectorFamily({
  key: "sectionHeadingSelector",
  get: (sectionId) => ({get}) => {
    const section = get(sectionAtom({id: sectionId}))
    return section.content.split('\n')[0];
  }
});

const SidebarItem = ({sectionId}) => {
  const heading = useRecoilValue(sectionHeadingSelector(sectionId));
  return <div>{heading}</div>
}

export default memo(SidebarItem)
