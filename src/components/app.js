import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';
import PostList from './post-list';
import PostAddForm from './post-add-form';

const App = () => {
    return (
        <div className='app'>
            <AppHeader/>
            <SearchPanel/>
            <PostList/>
            <PostAddForm/>
        </div>
    )    
}

export default App;