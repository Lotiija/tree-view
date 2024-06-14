import React, { useState } from 'react'
import MenuList from './menu-list';
import {FaMinus, FaPlus} from 'react-icons/fa';

const MenuItem = ({item}) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggle = (currentlabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentlabel] : !displayCurrentChildren[currentlabel]
    })
  }

  return (
    <li className='menu-item'>
      <div style={{display: 'flex', gap: '20px'}}>
        <p>{item.label}</p>
        {
          item && item.children && item.children.length ? <span onClick={()=> handleToggle(item.label)}>
            {
              displayCurrentChildren[item.label] ? <FaMinus color='orange' size='15'/> : <FaPlus color='orange' size='15'/>
            }
          </span> : null
        }
      </div>
        {
          item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]?
          <MenuList list={item.children}/>  
          : null
        }
    </li>
  )
}

export default MenuItem;