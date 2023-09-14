import axios from "axios";
export class UserService{
    
      static  getAllUsers(){
        let url='https://jsonplaceholder.typicode.com/users';
        return axios.get(url);
    }

    static  getUser(userid){
      let url=`https://jsonplaceholder.typicode.com/users/${userid}`;
      return axios.get(url);
  }
}

