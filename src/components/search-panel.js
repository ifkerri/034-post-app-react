import React from 'react';

const SearchPanel = () => {
    return (
        <div className ='search-panel d-flex'>
            <input 
                className='form control search-panel search-input'
                type='text'
                placeholder='Поиск по записям'
            />
            <div className='btn-group'>
                <button>Все</button>
                <button>Понравилось</button>    
            </div>    
        </div>        
    )
}

export default SearchPanel;