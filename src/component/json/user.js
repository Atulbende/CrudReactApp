import { getUniqueId } from "../common";
const   user={
    form:{
        id: getUniqueId(),
        name:'',
        username:'',
        email:'',
        phone:''
    },
    required:[{'text':['name',"username"]}]
}
export  default user;