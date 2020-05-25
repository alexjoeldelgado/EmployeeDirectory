import axios from "axios";
import RandomUsers from "./RandomUsers";

export default {
  getUsers: function() {
    return new Promise((resolve,reject) => {
          axios
            .get("https://randomuser.me/api/?results=50&nat=us")
            .then(res => {
              const users = res.data.results;
              const results = users.map(user => {
                return {
                  firstName: user.name.first,
                  lastName: user.name.last,
                  image: user.picture.large,
                  phoneNumber: user.phone,
                  dob: user.dob.date,
                  email: user.email,
                  id: user.login.uuid
                };
              });
              resolve(results);
            })
            .catch(err => {
              console.log(err);
              const randUsers = RandomUsers.results;
              const randResults = randUsers.map(user => {
                return {
                firstName: user.name.first,
                lastName: user.name.last,
                image: user.picture.large,
                phoneNumber: user.phone,
                dob: user.dob.date,
                email: user.email,
                id: user.login.uuid
                };
              });
              resolve(randResults);
            });
      });
  }
} 