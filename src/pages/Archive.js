import React from 'react';
import {Tabs} from '../components/Tabs/Tabs';
import ArchiveTab1 from './Archive/ArchiveTab1';
import ArchiveTab2 from './Archive/ArchiveTab2';

const tabs = [
   {
     text: 'Создать новую заявку',
     renderContent: () => (
       <ArchiveTab1 />
     ),
   },
   {
     text: 'Просмотр заявок',
     renderContent: () => (
       <div>
         <ArchiveTab2 />
       </div>
     ),
   },
 ]

const Archive = () => {
   return (
      <main className="main">
         <section className="px-3 py-5" style={{height: '100%'}}>
         <h4 style={{marginLeft: 72}} className="title mb-4">Архив</h4>

         {/* <!-- TABs --> */}
         <Tabs tabs={tabs}/>
         
         </section>

      </main>
   )
}

export default Archive
