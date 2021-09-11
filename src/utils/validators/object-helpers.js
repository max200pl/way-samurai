export const updateObjectInArray = (items, itemId, objPropName, newObjProps) =>
{
     return items.map(u => // получем копию массива объектов через .map
     {
          if (u[objPropName] === itemId) { // если id пользователя совпадает 
               return { ...u, ...newObjProps }
          }
          return u
     })
}