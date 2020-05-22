import React from "react";

function SearchInput(props) {
   return (
    <form style={{width: "20%", marginLeft: "35%"}}>
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