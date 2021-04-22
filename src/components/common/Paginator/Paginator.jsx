import React, {useState} from "react";
import s from "./Paginator.module.css";



const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let[portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;



  return (

    <div className={s.paginatorBox}>

        {portionNumber > 1 && 
          <button className={s.paginatorButton} onClick = {() => {setPortionNumber(portionNumber - 1)}}>Previous</button>
        }

        <div className={s.paginatorNumbers}>

              {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                  return (
                    <span
                      className={p === currentPage ? s.selectedPage : ""}
                      onClick={() => onPageChange(p)}
                      key={p}
                    >
                      {p}
                    </span>)
                })
                }

               
             </div>

        {portionCount > portionNumber && 
          <button className={s.paginatorButton} onClick = {() => {setPortionNumber(portionNumber + 1)}}>Next</button>
        }
        
    </div>

   
     
  )}
      
 

export default Paginator;
