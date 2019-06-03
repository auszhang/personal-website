import React, { Component } from 'react';
import Icon from './IconComponent/Icon';

class HomePage extends Component {
    render() {
        return (
            <div>
                Home Page 
                <Icon />
                <p className="nametitle">Austin Zhang</p>
            </div>
        )
    }
}

export default HomePage;
