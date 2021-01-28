import React from 'react';
import s from './Settings.module.css';


const Settings = (props) => {
    return (
        <div className= {s.settings}>
            <article>
                <img src="https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-setting-icon-design-vector-png-image_1607904.jpg" alt = "news"/>
                <h1>Settings</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Doloremque quia illum, voluptate nisi facere totam aperiam a alias assumenda modi 
                    voluptatem et quod rerum rem quam odio sit nesciunt temporibus.</p>
            </article>
        </div>
    );
}

export default Settings;

