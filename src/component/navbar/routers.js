import User from '../user/User';
import UserList from '../user/UserList';
export const MenuList= [{
    title:'Add User',
    icon:'fa fa-home mr-3',
    link:'/User',
    component:<User/>,
    visible:true
},
{
    title:'User List',
    icon:'fa fa-home mr-3',
    link:'/UserList',
    component:<UserList/>,
    visible:true

}]
