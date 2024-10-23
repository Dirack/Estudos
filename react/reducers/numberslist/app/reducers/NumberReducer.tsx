type AddAction = {
    type: 'add';
    payload: {
        number: number;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

type NumberAction = AddAction | RemoveAction

export const NumberReducer = (numbers: number[], action: NumberAction)=>{

    switch(action.type){
        case 'add':
            return [...numbers,action.payload.number]
        case 'remove':
            return numbers.filter((item,index)=> index !== action.payload.id)
        default:
            return numbers
    }
}