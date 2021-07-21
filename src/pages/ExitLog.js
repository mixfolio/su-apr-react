import React from 'react'
import { Tabs } from '../components/Tabs/Tabs'
import ExitLogTab1 from './ExitLog/ExitLogTab1'

const ExitLog = () => {
  const tabs = [
    {
      text: 'Регистрация новой поездки',
      renderContent: () => (
        <div className="tab-content">
          <ExitLogTab1 />
        </div>
      ),
    },
    {
      text: 'Мои поездки',
      renderContent: () => (
        <div className="tab-content">
          <h2>Мои поездки</h2>
        </div>
      ),
    },
    {
      text: 'План поездок сотрудников',
      renderContent: () => (
        <div className="tab-content">
          <h2>План поездок сотрудников</h2>
        </div>
      ),
    },
    {
      text: 'Отчет по выездам',
      renderContent: () => (
        <div className="tab-content">
          <h2>Отчет по выездам</h2>
        </div>
      ),
    },
    {
      text: 'Отчет по рабочему времени',
      renderContent: () => (
        <div className="tab-content">
          <h2>Отчет по рабочему времени</h2>
        </div>
      ),
    },
  ];

  return (
    <main className="main">
      {/* <div class="btn-burger icon-burger"></div> */}
      <section className="px-3 py-5" style={{height: '100%'}}>
        <h4 style={{marginLeft: 72}} className="title mb-4">Журнал выезда сотрудников</h4>

        {/* <!-- TABs --> */}
        <Tabs tabs={tabs}/>
      
      </section>

    </main>
  )
}

export default ExitLog
