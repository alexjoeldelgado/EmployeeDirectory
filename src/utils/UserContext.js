import React from "react";

const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  image: "",
  phoneNumber: "",
  dob: "",
  email: "",
  id: ""
});

export default UserContext;