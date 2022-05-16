import {memo, useMemo} from "react"
import useStore from "../store/useStore"

const SidebarItem = ({sectionId}) => {

  const section = useStore((store) => store.entities.sections[sectionId])
  const content = section.content

  const heading = useMemo(() => {
    return content.split('\n')[0];
  }, [content])

  return <div>{heading}</div>

}

export default memo(SidebarItem)
