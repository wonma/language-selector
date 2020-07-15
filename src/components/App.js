import React from 'react';

import { LanguageStore } from '../contexts/LanguageContext';
import { ColorStore } from '../contexts/ColorContext';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';

class App extends React.Component {
    state = { 
        color: 'blue'
    };

    render () {
        return (
            <div className="ui container">
                <LanguageStore>
                    <ColorStore>

                    <LanguageSelector />
                    <ColorSelector />
                    <UserCreate />

                    </ColorStore>
                </LanguageStore>

            </div>
        );
    }
}

export default App;