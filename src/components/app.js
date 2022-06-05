import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';
import PostList from './post-list';

const App = () => {
    return (
        <div className='app'>
            <AppHeader/>
            <SearchPanel/>
            <PostList/>
        </div>
    )    
}

export default App