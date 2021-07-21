import React from 'react'

const TabItem = ({text, onClick, active}) => {
   function handleClick() {
      onClick()
    }

   return (
      <div className="tab-item" onClick={handleClick}>
          <div className={`tab ${active ? "tab--active" : ""}`}>{text}</div>
      </div>
   )
}

export default TabItem
