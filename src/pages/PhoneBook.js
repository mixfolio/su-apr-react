import React from 'react'

const PhoneBook = () => {
   return (
      <main className="main">
         {/* <div className="btn-burger icon-burger"></div> */}
         <section className="px-3 py-5" style={{height: '100%'}}>
            <h4 style={{marginLeft: 72}} className="title mb-4">Телефонная книга</h4>

            <form className="row mb-3">
                  <input className="f-control f-control-ico f-control-ico--search mx-col w-40" name="search" type="text" placeholder="Поиск"/>
                  <button type="submit" className="btn btn-primary mx-col">Поиск</button>
            </form>
            
            <div className="table-responsive">
               <table className="table table-new">
                  <thead>
                     <tr>
                        <th>Управление</th>
                        <th>Отдел</th>
                        <th>ФИО</th>
                        <th>Должность</th>
                        <th>Телефон</th>
                        <th>E-mail</th>
                     </tr>
                  </thead>
                  
                  <tbody>
                     <tr>
                        <td>*АДМ</td>
                        <td>Администрация</td>
                        <td>Дегтярева Ирина Ивановна</td>
                        <td>Директор</td>
                        <td>101</td>
                        <td>DegtyarevaII@develop.mos.ru</td>
                     </tr>

                     <tr>
                        <td>*АДМ</td>
                        <td>Администрация</td>
                        <td>Дегтярева Ирина Ивановна</td>
                        <td>Директор</td>
                        <td>101</td>
                        <td>DegtyarevaII@develop.mos.ru</td>
                     </tr>

                     <tr>
                        <td>*АДМ</td>
                        <td>Администрация</td>
                        <td>Дегтярева Ирина Ивановна</td>
                        <td>Директор</td>
                        <td>101</td>
                        <td>DegtyarevaII@develop.mos.ru</td>
                     </tr>

                     <tr>
                        <td>*АДМ</td>
                        <td>Администрация</td>
                        <td>Дегтярева Ирина Ивановна</td>
                        <td>Директор</td>
                        <td>101</td>
                        <td>DegtyarevaII@develop.mos.ru</td>
                     </tr>

                     <tr>
                        <td>*АДМ</td>
                        <td>Администрация</td>
                        <td>Дегтярева Ирина Ивановна</td>
                        <td>Директор</td>
                        <td>101</td>
                        <td>DegtyarevaII@develop.mos.ru</td>
                     </tr>

                     <tr>
                        <td>*АДМ</td>
                        <td>Администрация</td>
                        <td>Дегтярева Ирина Ивановна</td>
                        <td>Директор</td>
                        <td>101</td>
                        <td>DegtyarevaII@develop.mos.ru</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>

      </main>
   )
}

export default PhoneBook
