import User from "../user/user";
import "./userlist.css";
import { useState,useEffect } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//console.log("global");

var mainUsers=[];


function Userlist(){
    const[isDataAvailable,setDataAvailable]=useState(false); //for fetch the data
    const[searchValue,setSearchValue]=useState("");  //for search 
    const[userList,setUserList]=useState([]);  // to filter
  //  console.log("InsideFunction");
    
 useEffect(function(){
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then((data)=>{
        setDataAvailable(true);
        setUserList(data.users);
        mainUsers=data.users;
        
    })
    .catch((err)=>{
        console.log(err);
    })
 },[]);

 function displayUser(users){
    //  console.log("displayUser");
      return(
          
          users.map((user)=>{
              return <User userdetails={user} ondelete={onDeleteFun} />
          })
      )
  }

 const onDeleteFun=(idk)=>{

    const updatedArr=mainUsers.filter((user)=>{
        return user.id!=idk;
    })
    mainUsers=updatedArr;

    setUserList(updatedArr);

 }
 useEffect(function(){
    fetch(`https://dummyjson.com/users/search?q=${searchValue}`)
.then(res => res.json())
.then((res)=>{
    setUserList(res.users);
});
 },[searchValue]);


  const onSearchValueChange=(e)=>{

    const value=e.target.value.toLowerCase();
    setSearchValue(value);

   
 }
    return(
     
           <div style={{}}>
             
            <h2>User List</h2>
            <div className="search-box">
            <form >
                <input onChange={onSearchValueChange} value={searchValue} type="text"/>
            </form>
           </div>
        <div className="ul">
           
        {
        (isDataAvailable)? displayUser(userList): <div className="spinner-class"><Spinner/></div>
         }      
        </div>
        </div> 

     
    
    )
}

export default Userlist;