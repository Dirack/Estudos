type AddUser = {
    type: 'add';
    payload: {
        user: string;
    }
}

type RemoveUser = {
    type: 'remove';
    payload: {
        user: string;
    }
}

type UserAction = AddUser | RemoveUser

export const UserReducer = (users: string[], action: UserAction)=>{
    switch(action.type){
        case 'add':
            return [...users,action.payload.user]
        case 'remove':
            return users.filter(item => item != action.payload.user)
        default:
            return users
    }
}