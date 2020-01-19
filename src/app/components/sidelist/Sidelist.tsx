import React, { useState } from 'react'
import { List, Heading } from 'grommet'
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
      itemProps={selected >= 0 ? { [selected]: { background: 'brightCerulean' } } : undefined}
      onClickItem={onListItemClick}
    >
      {(item: any) => (
        <Link to={item.url}>
          <Heading level={5}>{item.label}</Heading>
        </Link>
      )}
    </List>
  )
}

export default Sidelist
