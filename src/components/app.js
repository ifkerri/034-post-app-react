import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';

const App = () => {
    return (
        <div className='app'>
            <AppHeader/>
            <SearchPanel/>
        </div>
    )    
}

export default App