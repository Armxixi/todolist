import React from 'react'
import { useState , useEffect } from 'react'
import TodoHead from './TodoHead';
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';
import StateContext from './Contexts/StateContexts';

function Main() {

    const [todos,setTodos] = useState([
        {
            id:Math.random(),
            text:"Java Script",
            isCompleted: false,
            changin:false,
            todoDate:true

        },     
        {
            id:Math.random(),
            text:"Changin Text",
            isCompleted: false,
            changin:false,
            todoDate:true
        },
        {
            id:Math.random(),
            text:"Google lenguage",
            isCompleted: false,
            changin:false,
            todoDate:true

        }
    ])  
    function time(){       
        todos.map((e) => {
            if(e.todoDate !== true){
                setTimeout(() => {
                  return  e.todoDate = false;
                   },e.todoDate)       
            }  
        })
    }
    time()
      useEffect(() => {
                setTodos(
                  todos.filter((a) => {   
                       if(a.todoDate !== false){
                        return a
                       }
                       
                    })
                )
        },[todos]);
  return (
    <div >
        <StateContext.Provider value={[todos,setTodos]}>
        <TodoHead todos={todos}  onAdd={(text,data) => { 
            if(data.length !== 0){
                setTodos([
                    ...todos,
                    {
                        id: Math.random(),
                        text:text,
                        isCompleted:false,
                        changin:false,
                        todoDate:data
                    }
                ])
            }else{
                setTodos([
                    ...todos,
                    {
                        id: Math.random(),
                        text:text,
                        isCompleted:false,
                        changin:false,
                        todoDate:true
                    }
                ])
            }    
        }}
        />
        <TodoBody 
         todos={todos} 
        />
        <TodoFooter todos={todos} clearCompleted={() => {
           setTodos(todos.filter((todo) => !todo.isCompleted)) 
        }}/>
        <br/>      
        </StateContext.Provider>
    </div>
  )
}
export default Main;