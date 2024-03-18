import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

const Todos = () => {
    const todox = useSelector(state => state.todox)
    const dispatch=useDispatch()
  return (
    <ul>
        <div>TODOS</div>
        {
            todox.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button 
                    onClick={()=>dispatch(removeTodo(todo.id))}>
                    X
                    </button>
                </li>
            ))
        }
    </ul>
  )
}

export default Todos