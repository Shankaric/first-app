import styled from "styled-components";

export const Container=styled.div`

display: flex;
padding:10px;
width: 65%;
margin: 0 auto;
margin-top:50px;
gap:10px;
height:500px;
color:black;
background-color:rgba(253, 253, 253, 0.99);
box-shadow: 0px 5px 15px #0000003b;
.leftdiv{
  border-left: 1px solid #0000001a;
  width:40%;
}
.Rightdiv{
margin:10px;
width:60%
}   
@media (max-width:900px){
  .leftdiv{
    display:none !important;
  }
  width:50%;
  .Rightdiv{
  width:100%;
}
}
@media (max-width:800px){
  
  width:60%;
}
@media (max-width:660px){
  .footer{
    display:none !important;
  }
  @media (max-width:600px){
  
    width:97%;
    height:100vh;
   }
@media (max-width:500px){
  width:95%;
  height:100vh;
   }
   .Rightdiv{
    margin:5px;
   }
   @media (max-width:500px){
  
     .Rightdiv{
      margin:-5px;
     }
     }
@media (max-width:890px) {
 
.leftdiv{
      display:none !important;
    }
.Rightdiv{
    width:95%
}
  }

`
export const Centerdiv=styled.div`
padding:15px 15px;
text-align:left;


color:white;
`
export const Socialcontainer=styled.div`
display:flex;
gap:5px;
text-align:center;
align-items:center;
justify-content:center;
`
export const ImportContainer=styled.div`
width:100%
background-color:white;
border-top: 4px solid #3595f6;
height:max-content;
margin :20px;
border-radius:10px;
`