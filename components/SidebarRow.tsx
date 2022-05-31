import React from 'react'

interface Props {
  Icon: () => {}
  title: string
}

// props:Props
function SidebarRow({ Icon, title }: Props) {
  return <div>
    
    <Icon />
    <p>{title}</p>
  </div>
}

export default SidebarRow
