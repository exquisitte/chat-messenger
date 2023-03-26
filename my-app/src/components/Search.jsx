import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
        />
      </div>
    
        <div className="userChat">
          <div className="userChatInfo">
            <span>Name</span>
          </div>
        </div>
    </div>
  );
};
  

export default Search
