import React from 'react'
import MenuItem from './menu-item';

const MenuList = ({list = []}) => {

  return (
    <div className='menu-list-container'>
      {
        list && list.length > 0 ?
        list.map((listItem) => (
          <ul>
            <MenuItem item={listItem}/>
          </ul>
        ))
        : null
      }
    </div>
  )
}

export default MenuList;