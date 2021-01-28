import React from "react";
import s from "./NewPost.module.css";


const NewPost = (props) => {
 
  let newElem=React.createRef();

let addPost= (event)=>{
 
  event.preventDefault();
  props.data.onAddNewPost();
  
};

let onPostChange = ()=>{

let text= newElem.current.value;
props.data.onPostChange(text);
}



  return (
      <div className={s.new}>
        <form>
          <textarea ref ={newElem} value = {props.data.state.newPostText}
                    onChange = {onPostChange} placeholder="New post..."></textarea>

          <button onClick= {addPost}>Send</button>
          <div className={s.clear} />
        </form>
      </div>
  );
};

export default NewPost;
