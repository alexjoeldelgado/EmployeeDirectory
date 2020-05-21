import React, { useContext } from "react";
import UserContext from "../utils/UserContext";


function EmployeeItem() {
    const { users, searchedUsers, search} = useContext(UserContext);

    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("/");
        return formattedDate;
      }
    
    console.log(users);
    console.log(searchedUsers);
    console.log(search);
    return (
        <div className="row">
            
                {search === "" ? (users.map(user => {
                    return (
                    <div className="col s12 m4" key={user.id}>
                        <div className="card small horizontal" >
                            <div className="card-image" style={{height: "250px", width: "250px"}}>
                                <img src={user.image}  alt="avatar" /> 
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <span className="card-title">{user.firstName} {user.lastName}</span>
                                    <p>Phone: {user.phoneNumber}</p>
                                    <p>Date of Birth: {formatDate(user.dob)}</p>
                                </div>
                                <div className="card-action">
                                    <a href={user.email}>{user.email}</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    )  
                })) : (searchedUsers.map(user => {
                    return (
                    <div className="col s12 m4" key={user.id}>
                        <div className="card small horizontal" >
                            <div className="card-image" style={{height: "250px", width: "250px"}}>
                                <img src={user.image}  alt="avatar" /> 
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <span className="card-title">{user.firstName} {user.lastName}</span>
                                    <p>Phone: {user.phoneNumber}</p>
                                    <p>Date of Birth: {formatDate(user.dob)}</p>
                                </div>
                                <div className="card-action">
                                    <a href={user.email}>{user.email}</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    )  
                })

                )}
                
            
        </div>
    )
}
export default EmployeeItem;