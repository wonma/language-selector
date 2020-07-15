import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// 받아오는 방법은 LanguageStore를 만들었든아니었든 상관없음
// 사용할때는 여러 Context가 쓰이냐, 1개 Context가 쓰이냐 그것만 따지면 됨.
// 여러 Context쓰이면 Consumer로, 아니면 그냥 this.context로 하면 됨.

class Button extends React.Component {
    renderButtonText = (language) => {
        return language === 'english' ? 'submit' : 'shumits';
    }

    renderButton = (color) => {
        const buttonColor = color === 'blue' ? 'blue' : 'red';

        return (
            <button className={`ui button ${buttonColor}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderButtonText(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render(){
        return (
           <ColorContext.Consumer>
                {({ color }) => this.renderButton(color)}
           </ColorContext.Consumer> 
        );
    }
}

export default Button;