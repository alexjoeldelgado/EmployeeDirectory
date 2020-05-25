import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import EmployeeList from "./EmployeeList";
import SearchInput from "./SearchInput";
import Buttons from "./Buttons";

function Main () {
    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [sorted, setSorted] = useState(false);

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

    const handleInputChange = e => {
        setSearch(e.target.value);
        if (!search) {
            setSearchedUsers([]);
        } else {
            const results = users.filter(user => {
                const fullName = user.firstName + " " + user.lastName;
                return fullName.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
        setSearchedUsers(results);
        }
    };
    
    const sortByFirstName = () => {
        if (!sorted) {
            setUsers(users.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1))
            setSorted(!sorted);
        } else {
            setUsers(users.sort((a, b) => (a.firstName > b.firstName) ? -1 : 1))
            setSorted(false);
        }
    }
    const sortByLastName = () => {
        if (!sorted) {
            setUsers(users.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1));
            setSorted(!sorted);
        } else {
            setUsers(users.sort((a, b) => (a.lastName > b.lastName) ? -1 : 1));
            setSorted(false)
        }
    }
    const sortByDOB = () => {
        if (!sorted) {
           setUsers(users.sort((a, b) => (a.dob > b.dob) ? 1 : -1));
           setSorted(!sorted); 
        } else {
            setUsers(users.sort((a, b) => (a.dob > b.dob) ? -1 : 1));
            setSorted(false)
        }      
    }

    return (
      <UserContext.Provider value={{ users, search, searchedUsers }}>
        <div className="center">
            <SearchInput
                handleInputChange={handleInputChange}
                results={search}
            />
            <Buttons 
                sortFirst={sortByFirstName}
                sortLast={sortByLastName}
                sortDob={sortByDOB}
            />
        </div>
        <div className="main">
            <EmployeeList />
        </div>
      </UserContext.Provider>  
      
    );
  };

export default Main;