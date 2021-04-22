import React from 'react';
import s from './Music.module.css'


const Music = (props) => {
    return (
        <div className= {s.music}>

    
            <article>
                <img src="https://denali2013.org/wp-content/uploads/2018/06/music-07.jpg" alt = "news"/>
                <h1>Music</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Doloremque quia illum, voluptate nisi facere totam aperiam a alias assumenda modi 
                    voluptatem et quod rerum rem quam odio sit nesciunt temporibus.</p>
            </article>
        </div>
    );
}

export default Music;

