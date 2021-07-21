import React, {useState} from 'react'

const SidebarRight = () => {
   const [sidebar, setSidebar] = useState(true);
   const showSidebar = () => setSidebar(!sidebar)

   return (
      <div className={sidebar ? "sidebar-right show-menu" : "sidebar-right"}>
         <div className="sidebar-right__menu">
      
            <div className="sidebar__toggler mb-4">
               <div className="btn-round text-primary icon-arr-next" id="sidebarBtn" 
               onClick={showSidebar}>
               
               </div>
               <p className="sidebar__toggler-text sbar--show ml-2">Свернуть</p>
            </div>

            <div className="sidebar__toggler mb-4">
               <div className="btn-round text-primary icon-bell">
                  <span className="badge">99+</span>
                  
               </div>
               <p className="sidebar__desc sbar--show">Оповещения</p>
            </div>
            <p className="mb-4 text-muted sbar--show">Нет оповещений</p>

            <div className="sidebar__toggler mb-4">
               <div className="btn-round text-primary icon-calendar">
      
               </div>
               <p className="sidebar__desc sbar--show">Календарь</p>
            </div>

            <div className="sidebar__date sbar--show mb-4">
               <p className="sidebar__date-current">1 января 2020</p>
               <p className="sidebar__weekday text-muted">Среда</p>
            </div>

            <div className="sidebar__toggler sbar--show mb-4">
               <p className=" icon-plus icon-text">Добавить событие</p> 
            </div>

         </div>
      </div>
   )
}

export default SidebarRight
