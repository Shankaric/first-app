import React,{  useState } from 'react';
import $ from 'jquery';
import './App.css';
import mainlogo from './images/mainlogo.png'
import google from './images/ICONS/GOOGLE.png'
import microsoft from './images/ICONS/MICROSOFT.png'
import { Container, Centerdiv, Socialcontainer } from './components/component-styles';
import { FaApple, FaLinkedin, FaTwitter, FaFacebook, FaEllipsisH, FaHeart } from 'react-icons/fa';
import CarouselComponent from "./components/carousel-component";


function App() {

 
  const [hidden, setHidden] = useState(true);


  function showtext(){
    console.log('hwlo text')
  }

  return (
    
    <div className="App">
      <Container>
        <Centerdiv className='Rightdiv'>
    
       
          <form className="forms">
          <img src={mainlogo} alt="logo" />  
         
          { hidden ?

                  (<div className="firstdiv" >
         
                  <p className='headtxt'>Sign In</p>
                  <p className='subheadtxt'>to access POS home</p>
                  <input type="text" placeholder='Enter your email' />
                  <button className='loginbtn'>Next</button>
                  <a href="/forgotpwds" className='forgtpwd'>Forgot Password?</a>
                  <br /><br /><br />  
                  <Socialcontainer>
                    <button className='scocialimgbtn socialgoogle'><a href="/"><span className="icontxt"><img src={google} alt="Google logo" className="iconimg" /><span className='googleicontxt'>&ensp;Google</span></span></a></button>
                    <button className='scocialimgbtn socialmicrosoft'><a href="/"><img src={microsoft} alt="microsoft logo"className="iconimg" /></a></button>
                    <button className='socialbtn sociallinkedin'><a href="/"><FaLinkedin className='socialicon' /></a></button>
                    <button className='socialbtn socialtwitter'><a href="/"><FaTwitter className='socialicon' /></a></button>
                    <button className='socialbtn socialfacebook'><a href="/"><FaFacebook className='socialicon' /></a></button>
                   <button className='socialbtn socialall' onClick={()=>{setHidden(false)}}><FaEllipsisH className='socialicon socialall' /></button>
                  </Socialcontainer>
                </div>
              
                  ):(
            <div className="seconddiv" >
            <p className='headtxt'>Sign in using</p>
            <Socialcontainer>
              <button className='scocialimgbtn socialgoogle moreIcon'><a href="/"><span className="icontxt"><img src={google} alt="Google logo" className="iconimg" /><span className='googleicontxt'>&ensp;Google</span></span></a></button>
              <button className='scocialimgbtn socialmicrosoft moreIcon'><a href="/"><span className="icontxt"><img src={microsoft} alt="Google logo" className="iconimg" /><span className='socialiconstext'>&ensp; Microsoft</span></span></a></button>
              </Socialcontainer>
              <Socialcontainer>
              <button className='socialbtn sociallinkedin moreIcon'><a href="/"><span className="icontxt"><span className='socialiconstext'>&ensp;Linked</span><FaLinkedin className='socialLinkedicon socialiconsall' /></span></a></button>
              <button className='socialbtn socialfacebook moreIcon'><a href="/"><span className="icontxt"><FaFacebook className='socialappleicon socialiconsall' /><span className='socialiconstext'>&ensp;Facebook</span></span></a></button>

              </Socialcontainer>
              <Socialcontainer>
              <button className='socialbtn socialtwitter moreIcon'><a href="/"><span className="icontxt"><FaTwitter className='socialappleicon socialiconsall' /><span className='socialiconstext'>&ensp;Twitter</span></span></a></button>
              <button className='scocialimgbtn socialmicrosoft moreIcon'><a href="/"><span className="icontxt"><FaApple className='socialappleicon socialiconsall' /><span className='socialiconstext'>&ensp;Sign in with apple</span></span></a></button>
            </Socialcontainer>
            <br />
          <button type='button' className='signinbtn' onClick={()=>{setHidden(true)}} >Signin with Hilife.AI</button>
       
          </div>)
          
        }
            <br />
          </form> 
        </Centerdiv>
        <Centerdiv className='leftdiv'>
          <CarouselComponent></CarouselComponent>
          </Centerdiv>
        
      </Container> <br /><br />
      <div className="footer"></div>
      <span>Don't have an account? <a href="/singup" className='bottomlink'> Sign Up Now</a></span>
      <br /><br />
      <span className='hearts'>Made with &ensp;<FaHeart className='heart' /> &ensp; in Trichy  &ensp;| &ensp; திருச்சியில் உருவாக்கப்பட்டது &ensp;<FaHeart className='heart' />  </span>
      <br /><br />
   

    </div>

  );
  

 
}

export default App;
