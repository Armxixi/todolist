import React, { useContext } from 'react';
import TodoBodyCild from './TodoBodyCild';
import StateContext from './Contexts/StateContexts';

function TodoBody() {
    const [todos] = useContext(StateContext);
  return (
    <div  >
         {
         todos.map((todo) => 
            <TodoBodyCild  
            key={todo.id} 
            todo={todo}
            style={{
              marginTop: '30px'
            }}
            />
         )
         }
    </div>
  )
}

export default TodoBody;