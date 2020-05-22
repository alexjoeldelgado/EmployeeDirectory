import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import EmployeeList from "./EmployeeList";
import SearchInput from "./SearchInput";

function Main () {
    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        API
        .getUsers()
        .then(users => {
            setUsers(users);
        })
        .catch(err => console.log(err));
    };

    const searchUsers = () => {
        if (!search) {
            setSearchedUsers([]);
        } else {
        const results = users.filter(user => 
            user.firstName.toLowerCase().startsWith(search.toLowerCase()) || user.lastName.toLowerCase().startsWith(search.toLowerCase())
        )
        setSearchedUsers(results);
    }}

    const handleInputChange = e => {
        e.preventDefault();
        setSearch(e.currentTarget.value);
        searchUsers();
    };
    const handleFormSubmit = e => {
        e.preventDefault();
    }

    return (
      <UserContext.Provider value={{ users, searchedUsers, search }}>
        <SearchInput
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
        />
        <div className="main">
            <EmployeeList />
        </div>
      </UserContext.Provider>  
      
    );
  };

export default Main;