
var usersArray = [{
    id:1,
    firstName:'Shaun',
    lastName:'Murphy',
    email:'shaun@gmail.com',
    phone:'9888877777',
    status:'Active'
},{
    id:2,
    firstName:'Lea',
    lastName:'Spara',
    email:'lea@gmail.com',
    phone:'9855577777',
    status:'Active'
},{
    id:3,
    firstName:'Neil',
    lastName:'Melendez',
    email:'neil@gmail.com',
    phone:'9899977777',
    status:'Active'
}]

export class DataService {
    getUsers(){
        return usersArray;
    }
    updateUsers(users){
        usersArray = users;
    }
    getUser(id){
        return usersArray.find((i)=>i.id==id);
    }
    deleteUser(id){
        usersArray = usersArray.filter(i=>i.id!=id);
    }
}