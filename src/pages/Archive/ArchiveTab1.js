import React from 'react'

const ArchiveTab1 = () => {
   return (
      <>
         <div classNameName="row">
            <div classNameName="col-12 mb-3">
               <label classNameName="f-label" for="archive-2">Срочность</label>
               <div classNameName="f-check-group">
                  <div className="f-check mr-6">
                     <input className="f-check-input" id="urgent1" type="radio" value="value" name="urgent"/>
                     <label className="f-check-label" for="urgent1"><span>Срочная</span></label>
                  </div>
                  <div className="f-check">
                     <input className="f-check-input" id="nonUrgent1" type="radio" value="value" name="urgent" checked/>
                     <label className="f-check-label" for="nonUrgent1"><span>Обычной срочности</span></label>
                  </div>
               </div>
            </div>
         </div>

         <div className="row">
            
            <div className="col-6 mb-3">
               <label className="f-label" for="archive-1">Тип документа</label>
               <input id="archive-1" name="mail-from" className="f-control w-100" type="text" placeholder="Начните вводить тип документа"/>
            </div>

            <div className="col-6 mb-3">
               <label className="f-label" for="archive-2">Описание</label>
               <input id="archive-2" name="mail-from" className="f-control w-100" type="text" placeholder="Описание содержимого документа"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="mailFrom">Документ от (дата)</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="mailFrom">Документ до (Дата)</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
            </div>

            <div className="col-6 mb-3">
               <label className="f-label" for="mailFrom">№ Документа (Оригинальный)</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text"
                  placeholder="Введите текст"/>
            </div>
         </div>

         <hr className="mb-3"/>

         <div className="row">
            
            <div className="col-6 mb-3">
               
                  <label className="f-label" for="archive-1">Тип документа</label>
               <div className="d-flex align-items-center">
                  <input id="archive-1" name="mail-from" className="f-control w-100" type="text" placeholder="Начните вводить тип документа"/>
                  <button className="btn-round icon-trash text-muted ml-1"></button>
               </div>
               
               
            </div>

            <div className="col-6 mb-3">
               <label className="f-label" for="archive-2">Описание</label>
               <input id="archive-2" name="mail-from" className="f-control w-100" type="text" placeholder="Описание содержимого документа"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="mailFrom">Документ от (дата)</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
            </div>

            <div className="col-3 mb-3">
               <label className="f-label" for="mailFrom">Документ до (Дата)</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
            </div>

            <div className="col-6 mb-3">
               <label className="f-label" for="mailFrom">№ Документа (Оригинальный)</label>
               <input id="mailFrom" name="mail-from" className="f-control w-100" type="text"
                  placeholder="Введите текст"/>
            </div>
         </div>

         <div className="row">
            
            <div className="col-12 text-right mt-3">
               <button className="btn">Добавить документ</button>
            </div>

            <div className="col-12 text-center mt-3">
               <button className="btn btn-primary">Отправить</button>
            </div>

         </div>
      </>
   )
}

export default ArchiveTab1
