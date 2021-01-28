const addPost = "ADD-POST";
const updateNewPostText = "UP-NEW-POST-TEXT";



export const addPostActionCreator = () => ({type: addPost});

export const UpNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});


let initialState = {
    posts: [
       {id: 0, title:"This is postaaaaa", text : `Here is random text. Here is random text. Here is random text. 
       Here is random text.Here is random text. Here is random text.Here is random text. Here is random text.
       Here is random text. Here is random text. Here is random text. 
       Here is random text.Here is random text. Here is random text.Here is random text. Here is random text.`, 
       image : "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"},
       
       {id: 1, title: "This is post", text: `Thousands of pounds of cheese balls spill onto Maryland highway.
    Thousands of pounds of cheese balls spill onto Maryland highway.`, image : "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"},
    
       {id: 2, title: "This is post", text:  `An Arkansas fire department said crews responded to a resident's home to rescue an elderly 
       horse that became stranded on the cover of a swimming pool`, 
       image : "https://croppola.com/croppola/example-flower/image.jpg?algorithm=croppola&aspectRatio=1&width=600&thumbnailMaximumWidth=150"},
    
       {id: 3, title: "This is post", text : `A Kentucky man showed off his unusual method of clearing snow from his driveway 
       with a video showing him using a flamethrower to remove the unwanted show.`,
       image : "https://deep-image.ai/static/media/slider-3-a.a21f311c.jpg"},
    
        {id: 4, title: "This is post", text : `A 12-year-old boy living in the United Arab Emirates set a Guinness World Record by identifying 
        39 airlines by the designs on their airplane tails in one minute.`, 
       image : "https://images.static.press.net/v2/image/webpreview/8d19bd9b179702ead098b322bca42c84cHVibGljc2VhcmNobm93bSwxNjA5MTU5MDIx/2.50169101.jpg"}
   ],
   newPostText: "",
};

const postReducer = (localState = initialState, action)=>{
  

    switch(action.type){
        
        case addPost:
        
            let imgLink = prompt("Add an image link");
            let newPost = {id: localState.posts.length, title: "This is new post", text: localState.newPostText, image: imgLink};
            return {
                posts: [...localState.posts, newPost],
                newPostText: "",
            }
        case updateNewPostText:
         return {
             posts: localState.posts,
             newPostText: action.newText,
         }
        default:
         return localState;
    }
  
}
export default postReducer;