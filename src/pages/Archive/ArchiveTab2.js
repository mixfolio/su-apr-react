import React from 'react'

const ArchiveTab2 = () => {
   return (
      <>
         <div className="row">
            <div className="col-12 mb-3">
               <label className="f-label" for="archive-2">Срочность</label>
               <div className="f-check-group">
                  <div className="f-check mr-6">
                     <input className="f-check-input" id="urgent" type="radio" value="value" name="urgent"/>
                     <label className="f-check-label" for="urgent"><span>Срочная</span></label>
                  </div>
                  <div className="f-check">
                     <input className="f-check-input" id="nonUrgent" type="radio" value="value" name="urgent" checked/>
                     <label className="f-check-label" for="nonUrgent"><span>Обычной срочности</span></label>
                  </div>
               </div>
            </div>
      </div>

         <div className="row">

            <div className="col-6 mb-3">
               <label className="f-label" for="archive-1">Номер заявки</label>
               <input id="archive-1" name="mail-from" className="f-control w-100" type="text" placeholder="Не имеет значения"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="archive-1">Тип документа</label>
               <input id="archive-1" name="mail-from" className="f-control w-100" type="text" placeholder="Начните вводить тип документа"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="archive-2">Описание</label>
               <input id="archive-2" name="mail-from" className="f-control w-100" type="text" placeholder="Не имеет значения"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="mailFrom">Статус</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Не имеет значения"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="mailFrom">Описание</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Не имеет значения"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="mailFrom">Исполнитель</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Не имеет значения"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="mailFrom">Комментарий</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Не имеет значения"/>
            </div>



            <div className="col-12 text-center mt-3">
               <button className="btn btn-primary">Отправить</button>
            </div>
         </div>
      </>
   )
}

export default ArchiveTab2
