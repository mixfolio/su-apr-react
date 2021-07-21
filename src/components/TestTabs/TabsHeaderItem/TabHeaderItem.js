import React from 'react';

import './TabHeaderItem.scss';

export function TabHeaderItem({text, active, onClick}) {

   function handleClick() {
      onClick && onClick()
   }
   return (
      <div className="tab-header-item__container"
         onClick={handleClick}>
         <div className={`tab-header-item__left-corner
            ${active ? "tab-header-item__left-corner--active" : ""}`}>
         </div>
         <div className={`tab-header-item__content-container
            ${active ? "tab-header-item__content-container--active" : ""}`}>
            <div className="tab-header-item__title">{text}</div>
         </div>
         <div className={`tab-header-item__right-corner
            ${active ? "tab-header-item__right-corner--active" : ""}`}>
         </div>
      </div>
   )
}