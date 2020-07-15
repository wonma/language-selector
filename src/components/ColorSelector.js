import React from 'react';
import ColorContext from '../contexts/ColorContext';

class ColorSelector extends React.Component {
    static contextType = ColorContext;

    render() {
        console.log(this.context);
        return (
            <div>
                Select Color:
                <i className="circle icon blue" onClick={() => { this.context.onColorChange('blue') }} />
                <i className="circle icon red" onClick={() => { this.context.onColorChange('red') }} />
            </div>
        );
    }
}

export default ColorSelector;