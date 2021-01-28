import messageReducer from "./reducerMessages";
import postReducer from "./reducerPosts";



export const store = {
    _state: {
        ChatsData: {
            chatsUsers: [
            {link: "/chat0", name: "Bulbasaur",
            image: "https://static.pokemonpets.com/images/monsters-images-300-300/2001-Shiny-Bulbasaur.png",
            messages: [
                 {iAmSender: false, text: "Bulba"},
                 {iAmSender: true, text: "Hi bidy, are you also want to come to the party?"},
                 {iAmSender: false, text: "Bulba bulba"},
                 {iAmSender: true, text: "Sorry, is it yes or no?"},
                 {iAmSender: false, text: "Bulba bulba"},
                 {iAmSender: true, text: "Never mind. If you gonna come, just come. Any way I don't understand you."},
                 {iAmSender: false, text: "Bulba bulba Bulba bulba"},
                 {iAmSender: true, text: "By..."},
                 {iAmSender: false, text: "Bulba bulba"},
                 {iAmSender: true, text: "Never mind. If you gonna come, just come. Any way I don't understand you."},
                 {iAmSender: false, text: "Bulba bulba Bulba bulba"},
                 {iAmSender: true, text: "By..."},
            ]},
            {link: "/chat1", name: "Hulk", 
            image: "https://images.immediate.co.uk/production/volatile/sites/3/2017/10/TRB1420_comp_v422.1056-8e99dab.jpg?quality=90&resize=768,574",
            messages:[
                {iAmSender: true, text: "Hello Big Guy."},
                {iAmSender: false, text: "Hi little, whats up?"},
                {iAmSender: true, text: "Where are you?"},
                {iAmSender: false, text: "As usual, fighting"},
                {iAmSender: true, text: "Call me when every one is dead)"}
            ]},
           {link: "/chat2", name: "Shrek", 
            image: "https://cdnimg.rg.ru/img/content/161/31/13/kinopoisk.ru-Shrek-13985_d_850.jpg",
            messages: [
                {iAmSender: false, text: "Hola amigo"},
                {iAmSender: true, text: "Hello Shrek, are you comming tonight?"},
                {iAmSender: false, text: "Of course, I'll be on time!"}
            ]},
           {link: "/chat3", name: "Mask", 
            image: "https://cdn.pastemagazine.com/www/articles/TheMaskMain.png",
            messages: [
                {iAmSender: true, text: "Hay, Funny, have you prepare everything for the party?"},
                {iAmSender: false, text: "No, I'll do it later."},
                {iAmSender: true, text: "What do you meen latter?"},
                {iAmSender: true, text: "Party in 2 hrs"},
                {iAmSender: false, text: "Don't warry) I'm god, I need 5 sec to make it done"},
                {iAmSender: true, text: "Hope so..."},
            ]},
           {link: "/chat4", name: "Green",
            image:"https://ictv.ua/wp-content/uploads/2016/08/12/1470992851_20140903182609.jpg",
           messages:[
            {iAmSender: true, text: "Hi brother, how it's going on?"},
                {iAmSender: false, text: "Everything is awesome. Gomora gonna come!"},
                {iAmSender: true, text: "Good news. What about the others?"},
                {iAmSender: false, text: "Most of them in. Party gonna be great."},
           ]}],
           newMessageText: "",
        },
        PostsData: {
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
       },
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){

    },
    subscribe(observer){

        this._callSubscriber= observer;
    },
    dispatch (action) {
        
        this.state.ChatsData = messageReducer(this._state.ChatsData, action);
        this.state.PostsData = postReducer(this._state.PostsData, action);
        this._callSubscriber();
    }




}
    
    



    