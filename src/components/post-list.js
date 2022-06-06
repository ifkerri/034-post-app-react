import React from 'react';
import PostListItem from './post-list-item';

const PostList = () => {

    return (
        <div className='app-list list-group'>
            <ul className='list-group-item'>
                <PostListItem />
                <PostListItem />
                <PostListItem />
            </ul>
        </div>
    )

}

export default PostList;