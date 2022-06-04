import React from "react";

const SearchPanel = () => {
    return (
        <div>
            <input 
                className='search-panel search-input'
                type='text'
                placeholder="Поиск по записям"/>
            <button>Все</button>
            <button>Понравилось</button>
        </div>        
    )
}

export default SearchPanel