import * as R from "ramda"

const sortPaperSections = R.pipe(
  R.values,
  R.filter((s) => s.type === 'paper'),
  R.sortBy(R.prop('position'))
)

export default sortPaperSections
