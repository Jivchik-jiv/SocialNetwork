
export const updateObjectInArray = (items, itemId , objPropertyName, newObjProps) =>{
  
    return items.map(i => {
        if (i[objPropertyName] === itemId) {
            return {
                ...i,
                ...newObjProps
            };
        } else {
            return i;
        }
    })
}
