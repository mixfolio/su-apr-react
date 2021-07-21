import React from 'react'

const ExitLogTab1 = () => {
   return (
      <div className="row">

         <div className="col-3 mb-3">
            <label className="f-label" for="mailFrom">Сотрудник</label>
            <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
         </div>

         <div className="col-3 mb-3">
            <label className="f-label" for="mailFrom">Организация</label>
            <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
         </div>

         <div className="col-3 mb-3">
            <label className="f-label" for="mailFrom">Дата и время выезда</label>
            <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
         </div>

         <div className="col-3 mb-3">
            <label className="f-label" for="layerName">Цель поездки</label>
            <select id="layerName" className="f-select w-100">
               <option selected="">Выберите из списка</option>
               <option value="1">Слой 2</option>
            </select>
         </div>

         <div className="col-6 mb-3">
            <label className="f-label" for="mailFrom">Адрес назначения</label>
            <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
         </div>

         <div className="col-3 mb-3">
            <label className="f-label" for="mailFrom">Планируемое время поездки</label>
            <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
         </div>

         <div className="col-3 mb-3">
            <label className="f-label" for="mailFrom">Описание поездки</label>
            <input id="mailFrom" name="mail-from" className="f-control w-100" type="text" placeholder="Введите текст"/>
         </div>
   
         <div className="w-100 text-center mt-2">
            <button className="btn btn-primary">Зарегистрировать</button>
         </div>
      </div>
   )
}

export default ExitLogTab1
