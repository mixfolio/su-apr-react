import React from 'react';
import TabItem from './TabItem';

const TabsList = ({tabs, activeIndex, onTabClick}) => {
   function handleClick(index) {
      onTabClick(index)
   }

   return (
      <ul className="tabs-list">
      {tabs.map((tab, index) => (
        <li key={index}>
          <TabItem
            text={tab.text}
            onClick={() => handleClick(index)}
            active={index === activeIndex}
          />
        </li>
      ))}
    </ul>
   )
}

export default TabsList
