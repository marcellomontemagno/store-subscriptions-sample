import * as R from "ramda"
import {selector} from "recoil"
import {sectionAtom, sectionIdsAtom} from "../store/atoms"

const sortedPaperSectionsSelector = selector({
  key: "sortedPaperSectionsSelector",
  get: ({get}) => {
    const sectionsIds = get(sectionIdsAtom);
    const sections = sectionsIds.map((id) => get(sectionAtom({id})))
    return R.pipe(
      R.filter((s) => s.type === 'paper'),
      R.sortBy(R.prop('position'))
    )(sections)
  }
})

export default sortedPaperSectionsSelector
