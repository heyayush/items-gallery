import React, { useState } from 'react'
import { List } from 'grommet'
import './sidelist.scss'
import { Link } from 'react-router-dom'

const Sidelist = (props: any) => {
  const [selected, setSelected] = useState(0)

  const onListItemClick = (event: any): void => {
    if (selected === event.index) {
      return
    }
    setSelected(event.index)
  }

  return (
    <List
      className="sidebar-list"
      data={props.listData}
      itemProps={selected >= 0 ? { [selected]: { background: 'accent-1' } } : undefined}
      onClickItem={onListItemClick}
    >
      {(item: any) => <Link to={item.url}>{item.label}</Link>}
    </List>
  )
}

export default Sidelist
