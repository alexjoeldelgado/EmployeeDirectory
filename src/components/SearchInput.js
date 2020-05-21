import React from "react";

function SearchInput(props) {
   return (
    <form>
        <input
        value={props.results}
        onChange={props.handleInputChange}
        onSubmit={props.handleFormSubmit}
        placeholder="Type a First or Last Name"
        id="name"
        />
    </form>
   ) 
}

export default SearchInput;