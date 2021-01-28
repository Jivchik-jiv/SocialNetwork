
const sendNewMessage = "SEND-NEW-MESSAGE";
const updateNewMessageText = "UP-NEW-MESSAGE-TEXT";



export const sendNewMessageActionCreator = () => ({type:sendNewMessage});

export const upNewMessageTextActionCreator = (text) => ({type:updateNewMessageText, newText: text});


let initialState = {
  chatsUsers: [
  {id: 0, link: "/chat0", name: "Bulbasaur",
  image: "https://static.pokemonpets.com/images/monsters-images-300-300/2001-Shiny-Bulbasaur.png",
  messages: [
       {id: 0, iAmSender: false, text: "Bulba"},
       {id: 1, iAmSender: true, text: "Hi bidy, are you also want to come to the party?"},
       {id: 2, iAmSender: false, text: "Bulba bulba"},
       {id: 3, iAmSender: true, text: "Sorry, is it yes or no?"},
       {id: 4, iAmSender: false, text: "Bulba bulba"},
       {id: 5, iAmSender: true, text: "Never mind. If you gonna come, just come. Any way I don't understand you."},
       {id: 6, iAmSender: false, text: "Bulba bulba Bulba bulba"},
       {id: 7, iAmSender: true, text: "By..."},
       {id: 8, iAmSender: false, text: "Bulba bulba"},
       {id: 9, iAmSender: true, text: "Never mind. If you gonna come, just come. Any way I don't understand you."},
       {id: 10, iAmSender: false, text: "Bulba bulba Bulba bulba"},
       {id: 11, iAmSender: true, text: "By..."},
  ]},
  {id: 1,link: "/chat1", name: "Hulk", 
  image: "https://images.immediate.co.uk/production/volatile/sites/3/2017/10/TRB1420_comp_v422.1056-8e99dab.jpg?quality=90&resize=768,574",
  messages:[
      {iAmSender: true, text: "Hello Big Guy."},
      {iAmSender: false, text: "Hi little, whats up?"},
      {iAmSender: true, text: "Where are you?"},
      {iAmSender: false, text: "As usual, fighting"},
      {iAmSender: true, text: "Call me when every one is dead)"}
  ]},
 {id: 2,link: "/chat2", name: "Shrek", 
  image: "https://cdnimg.rg.ru/img/content/161/31/13/kinopoisk.ru-Shrek-13985_d_850.jpg",
  messages: [
      {iAmSender: false, text: "Hola amigo"},
      {iAmSender: true, text: "Hello Shrek, are you comming tonight?"},
      {iAmSender: false, text: "Of course, I'll be on time!"}
  ]},
 {id: 3,link: "/chat3", name: "Mask", 
  image: "https://cdn.pastemagazine.com/www/articles/TheMaskMain.png",
  messages: [
      {iAmSender: true, text: "Hay, Funny, have you prepare everything for the party?"},
      {iAmSender: false, text: "No, I'll do it later."},
      {iAmSender: true, text: "What do you meen latter?"},
      {iAmSender: true, text: "Party in 2 hrs"},
      {iAmSender: false, text: "Don't warry) I'm god, I need 5 sec to make it done"},
      {iAmSender: true, text: "Hope so..."},
  ]},
 {id: 4,link: "/chat4", name: "Green",
  image:"https://ictv.ua/wp-content/uploads/2016/08/12/1470992851_20140903182609.jpg",
 messages:[
  {iAmSender: true, text: "Hi brother, how it's going on?"},
      {iAmSender: false, text: "Everything is awesome. Gomora gonna come!"},
      {iAmSender: true, text: "Good news. What about the others?"},
      {iAmSender: false, text: "Most of them in. Party gonna be great."},
 ]}],
 newMessageText: "",
}

const messageReducer = (localState = initialState, action) =>{


switch (action.type){
  case sendNewMessage:
    return {
      chatsUsers: localState.chatsUsers.map((obj, ind,) => {
        if(ind === 0){
          let newObj = {...obj};
          let newMessage= {iAmSender: true, text: localState.newMessageText};
          newObj.messages = [...obj.messages, newMessage];
          return newObj;
        } else{
          return obj;
        }
      }),
      newMessageText: "",
    }
  case updateNewMessageText:

  return {
    ...localState,
    newMessageText: action.newText,
  }
  default:
    return localState;
}

}

export default messageReducer;