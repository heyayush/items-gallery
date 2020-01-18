import React, { useState } from 'react'
import { List } from 'grommet'
import './sidelist.scss'

const Sidelist = (props: any) => {
  const [selected, setSelected] = useState(0)

  return (
    <List
      className="sidebar-list"
      data={props.listData}
      itemProps={selected >= 0 ? { [selected]: { background: 'accent-1' } } : undefined}
      onClickItem={(event: any) => setSelected(selected === event.index ? undefined : event.index)}
    />
  )
}

export default Sidelist
