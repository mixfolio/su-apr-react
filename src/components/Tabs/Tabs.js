import React, {useState} from 'react';
import TabsList from '../Tabs/TabsList';


export function Tabs({ tabs }) {
   const [activeIndex, setActiveIndex] = useState(0)
 
   function handleTabClick(index) {
     setActiveIndex(index)
   }
 
   return (
     <div className="tabs__container">
       <div className="tabs__header-container">
         <TabsList
           activeIndex={activeIndex}
           tabs={tabs}
           onTabClick={handleTabClick}
         />
       </div>
       <div className="tabs__content-container">
         {tabs[activeIndex].renderContent()}
       </div>
     </div>
   )
 }