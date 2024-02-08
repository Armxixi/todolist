import React from 'react';
import { useState } from 'react';
import { Button ,Input} from '@mui/material';
function TodoHead({onAdd}) {
        const [text, setText] = useState("");
        const [data, setData] = useState("");
  return (
    <div >     
        <form style={{
             display: "flex",
             width: "300px"
        }}
        onSubmit={(e) => {
            e.preventDefault();
            if(text.length !== 0){
                
                    onAdd(text,data);
                }
                setText("");
                setData("")
       } }> 
        <span style={{
            display:"flex"
        }} ><Input type="text" maxlength="15"  value={text} onChange={(e) => {
            setText(e.target.value)
        }}
        sx={{
            width: 227,
            height: 26,
            borderRadius:0.8,
            backgroundColor:'#ffffff',  
            color:"#166c96",
            fontFamily: `'Protest Revolution',' sans-serif'`,
            fontSize: 17
              }}

            
        /><Input variant="disabled"  type="text"   placeholder='Timer'  value={data}  onChange={(a) => {
            setData(a.target.value);
            }}
        sx={{
           width:40, 
           height:26,
           borderRadius:0.8,
           marginLeft: "2px",
           backgroundColor:'#ffffff', 
           color:"#166c96",
           fontFamily: `'Protest Revolution',' sans-serif'`,
           fontSize: 15
            }}
        />
        <Button variant="contained" auto type="submit" style={{maxWidth: '50px', maxHeight: '25px', minWidth: '50px', minHeight: '25px'}}
         sx={{
            backgroundColor:"#1b2651",
            marginLeft: "4px",
            fontFamily: `'Protest Riot', 'sans-serif'`
             }}>Add</Button>
        </span>
        
        </form>
    </div>
  )
}

export default TodoHead;