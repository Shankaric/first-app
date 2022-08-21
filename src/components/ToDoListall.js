import React, {useState} from 'react';
import { Button, TextField, Grid } from '@mui/material';

function ToDoListall() {

  const[newItem, setNewItem] = useState("");
  const[items, setItems ]= useState([]);


  function addItem(){
    const item={
      id:Math.floor(Math.random()*1000),
      value:newItem
    };
    setItems(oldList => [...oldList,item]);
    setNewItem("");
    console.log(items);
  }
  function deleteItem(id){
    const newArray=items.filter(item=>item.id !== id);
    setItems(newArray);

    };


  return (
    <div className="todo">
         <Grid container spacing={2}>
                <Grid item xs={10}>
                    <TextField variant="outlined" size="small"
                            className="form-control variantName"
                            placeholder="Add an item..."
                            label="item"
                            value={newItem}
                            onChange={e=> setNewItem(e.target.value)}
                            
                            
                            /> 
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" size="small" onClick={()=>addItem()}>➕</Button>
           
                </Grid>

            </Grid>

     <br />
      <ul type="none" className="todoLlistUl">
  
       {items.map(item=>{
        return(
          <li  key={item.id}>

            <Grid container spacing={2}>
                <Grid item xs={10} style={{margin:"0",padding:"0"}}>
                    <TextField variant="outlined" size="small" label="item" value={item.value}/>&ensp;
                </Grid>
                <Grid item xs={2}>
                    <Button color="error" variant="contained" size="small" type="button" onClick={()=>deleteItem(item.id)}>❌</Button>
                </Grid>

            </Grid>
            
            
            </li>
        )
       })}
      </ul>
    </div>
  );
}

export default ToDoListall;
