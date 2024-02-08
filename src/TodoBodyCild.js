
import React, { useContext, useState } from 'react';
import StateContext from './Contexts/StateContexts';
import {Input,Checkbox,Grid} from '@mui/material';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';

function TodoBodyCild({todo}) {
    const [todos,setTodos] = useContext(StateContext)
    const [todoText,setTodoText] = useState(todo.text);
    
  return (
    <div style={{
        paddingTop: '15px',
        display:'flex',
        justifyContent:"space-between"
    }}>   
    
            {todo.changin  ? <form style={{
                display:"flex",
                justifyContent:"space-between",
                width:"300px"
            }}
             onSubmit={(e) => {
                e.preventDefault();
                    if(todoText.length !== 0){
                       setTodos(todos.map((a) => {
                     if(a.id === todo.id ){
                            return {
                                ...a,
                                id:Math.random(),
                                text:todoText,
                                isCompleted: false,
                                changin:false
                            }
                            
                        }return a; 
                       }))}
            }}>
                <Input autoFocus='true'  maxlength="15" type="text" defaultValue={todoText}
                     onChange={(e) => {
                    setTodoText(e.target.value); 
                         }}
                         style={{fontSize:"18px",paddingLeft:"5px"}}
                         sx={{
                            width: 247,
                            height: 26,
                            borderRadius:0.8,
                            backgroundColor:'#ffffff',  
                            color:"#166c96",
                            fontFamily:`'Protest Revolution',' sans-serif'`
                  }}
            /> 
             <ReplaySharpIcon sx={{
           cursor:'pointer'
                            }}
                onClick={(event) => {
                event.stopPropagation()
                setTodos(todos.map((e) => {
                    if(e.changin === true && e.id === todo.id){
                        return {
                            ...e,
                            id:Math.random(),
                            text:e.text,
                            isCompleted: false,
                            changin:false
                        }
                    }return e;
                }))
            }}/></form>  
            :
            <div  style={{
                display: "flex",
                width:"327px"
            }}> 
            <div 
               style={{
                display: "flex"
                      }}>
                
                <Checkbox  type="checkbox"  value="dIsabled" defaultChecked color="default" 
                                sx={{
                                     height: 20,
                                    cursor:'pointer',
                                    marginRight:1.5,
                                    color:	"#1b2651"
                                    
                         }}
                     
                     style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                        marginright: "10px",
                        backgroundscolor: "#c2c8ca"
                     }}
                      checked={todo.isCompleted} onChange={(e) => {
                const todoList = todos.map((item) => {
                    if(item.id === todo.id) {
                        return {
                            ...todo,
                            isCompleted: e.target.checked
                        }
                    } else {
                        return item
                    }
                })
                setTodos(todoList)
                }}/><span 
                style={{
                    marginbottom: "10px",
                    width: "262px",
                    gup:"15px"
                 }}
                 onClick={() => {
                       setTodos(todos.map((e) => {
                            if(e.id === todo.id){
                                return {
                                    ...e,
                                    changin: true 
                                }
                            }else{
                                return {
                                    ...e,
                                    changin: false 
                                }
                            }
                       
                        }))
                }}>
                    <Grid  
                     minWidth={150}
                     style={{
                    display:"flex",
                    color: "#166c96"

                        }} >
                        <Grid item sx={{fontFamily: `'Protest Revolution',' sans-serif'`}} style={{fontSize:"18px"}}>{todo.text}</Grid>
                        <Grid item 
                        xs
                        style={{ 
                            display:"flex",
                            justifyContent: "flex-end",
                            color: "#166c96",
                            cursor:'pointer',
                            
                            }}><EditSharpIcon />
                        </Grid>
                  </Grid>
               </span>
                </div>
               
            <ClearSharpIcon   
                    sx={{
                        color:'	#cd2028',
                        height: 22,
                        fontSize: 22,
                        cursor:'pointer',
             }}
            onClick={() => {
                const onDeleteTodos = todos.filter((e)  => e.id !== todo.id);
                setTodos(onDeleteTodos);
            }} />
           
                </div>
        } 
    </div>
  )
}
export default TodoBodyCild;