import React from 'react'
import { useContext } from 'react';
import StateContext from './Contexts/StateContexts';
import { Button } from '@mui/material';

function TodoFooter({clearCompleted}) {
    const [todos] = useContext(StateContext)
    const completedSize = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      paddingTop:"9px",
      width: "322px"
    }}>
          <StateContext.Provider>
         <div style={{fontSize:"18px",fontFamily: `'Protest Revolution',' sans-serif'`}}> {completedSize}/{todos.length}  Completed</div>
        <Button onClick={clearCompleted} variant="contained"
        sx={{
          width: 166,
          backgroundColor:"#1b2651",
          fontFamily: `'Protest Riot', 'sans-serif'`
}}
 

        >Clear Completed</Button>
        </StateContext.Provider>
    </div>
  )
}

export default TodoFooter