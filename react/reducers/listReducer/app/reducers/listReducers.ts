import { Item } from "../page";

type AddAction = {
    type: 'add';
    payload: {
        text: string;
    }
}

type EditTextAction = {
    type: 'editText';
    payload: {
        id: number;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id: number;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction

export const listReducer = (list: Item[], action: ListActions): Item[]=>{

    switch(action.type){
        case 'add':
            return [...list, {
                id: list.length,
                task: action.payload.text,
                done: false,
            }]
        case 'editText':
            return list.map(t=>{
                if(t.id === action.payload.id){
                    t.task = action.payload.newText
                }
                return t
            })
        case 'toggleDone':
            return list.map(t => {
                if(t.id === action.payload.id) t.done = !t.done
                return t
            })
        case 'remove':
            return list.filter(t => t.id !== action.payload.id)
    }
}