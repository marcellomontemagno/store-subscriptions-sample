import {useContext, useMemo} from "react"
import StoreContext from "../store/StoreContext"

const SidebarItem = ({sectionId}) => {

  const [store] = useContext(StoreContext)
  const sections = store.entities.sections
  const section = sections[sectionId]
  const content = section.content

  const heading = useMemo(() => {
    return content.split('\n')[0];
  }, [content])

  return <div>{heading}</div>

}

export default SidebarItem
