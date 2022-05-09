import {v4 as uuidv4} from "uuid"

const createSection = (props) => {
  return {
    id: uuidv4(),
    type: 'paper',
    content: '',
    ...props
  }
}

export default createSection
