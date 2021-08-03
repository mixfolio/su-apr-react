import React, {useState} from 'react';
import ModalTest from '../components/ModalTest';
import { Tabs } from '../components/Tabs/Tabs';
import Button from '../components/UI/Button'
import PromRadarModal from './Modals/PromRadarModal';

const Home = () => {
   const tabs = [
      {
        text: 'Бюджет',
        renderContent: () => (
          <div>
            <h2>Вкладка Бюджет</h2>
          </div>
        ),
      },
      {
        text: 'Затраты',
        renderContent: () => (
          <div>
            <h2>Вкладка Затраты</h2>
          </div>
        ),
      },
      {
        text: 'ФОТ',
        renderContent: () => (
          <div>
            <h2>Вкладка ФОТ</h2>
          </div>
        ),
      },
      {
        text: 'Закупки',
        renderContent: () => (
          <div>
            <h2>Вкладка Закупки</h2>
          </div>
        ),
      },
      {
        text: 'Прочее',
        renderContent: () => (
          <div>
            <h2>Вкладка Прочее</h2>
          </div>
        ),
      },
   ];
   const Hello = () => console.log('Hello');
   
   const [modalActive, setModalActive] = useState(false);
   function closeModal() {
      setModalActive(!modalActive)
   }


   return (
      <main className="main">
      {/* <div className="btn-burger icon-burger"></div> */}
      <section className="px-3 py-5" style={{height: '100%'}}>
        <h4 style={{marginLeft: 72}} className="title mb-4">Главная</h4>

        <button className="btn mb-3"
         onClick={() => setModalActive(true)}>
           Модальное окно
           </button>

        {/* <!-- TABs --> */}
        <Tabs tabs={tabs}/>

        <Button onClick = {Hello}className="btn-primary mt-3">
           Нажать
        </Button>
      
      </section>

      <ModalTest active={modalActive} setActive={setModalActive}>
         <PromRadarModal closeModal={closeModal}/>
      </ModalTest>

    </main>

      
      


   )
}

export default Home
