import { Post } from "../types/Post";

type AddAction = {
    type: 'add';
    payload: {
        title: string;
        body: string;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

type PostAction = AddAction | RemoveAction

export const PostReducer = (posts: Post[], action: PostAction)=>{
    switch(action.type){
        case 'add':
            return [...posts, {
                id: posts.length,
                title: action.payload.title,
                body: action.payload.body,
            }]
        case 'remove':
            return posts.filter(item => item.id!=action.payload.id)
        default:
            return posts
    }
}