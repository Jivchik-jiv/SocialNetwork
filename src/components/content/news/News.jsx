import React from 'react';
import s from './News.module.css'


const News = (props) => {
    return (
        <div className= {s.news}>
            <article>
                <img src="https://region-news.kr.ua/wp-content/uploads/2020/07/23.jpg" alt = "news"/>
                <h1>News</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Doloremque quia illum, voluptate nisi facere totam aperiam a alias assumenda modi 
                    voluptatem et quod rerum rem quam odio sit nesciunt temporibus.</p>
            </article>
        </div>
    );
}

export default News;

