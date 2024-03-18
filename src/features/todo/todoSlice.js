import { createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todox:[
        {
            id:1,
            text:'Hello World',
        }
    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }

            state.todox.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todox = state.todox.filter((todo)=> todo.id!== action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer