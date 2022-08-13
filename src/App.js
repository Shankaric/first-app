import React from 'react';
// import $ from 'jquery';
import './App.css';
// import ImportProducts from './components/import-products';
import Importcontacts from './components/import-contacts';

// import mainlogo from './images/mainlogo.png'
// import google from './images/ICONS/GOOGLE.png'
// import microsoft from './images/ICONS/MICROSOFT.png'
// import { Container, Centerdiv, Socialcontainer } from './components/component-styles';
// import { FaApple, FaLinkedin, FaTwitter, FaFacebook, FaEllipsisH, FaHeart, FaEyeSlash } from 'react-icons/fa';
// import CarouselComponent from "./components/carousel-component";


function App() {

 
  // const [hidden, setHidden] = useState(true);
  // $(document).ready(function(){
  //   $(".seconddiv").hide();
  //   $(".pasworddiv").hide();
  //   $(".socialall").click(function(){
  //     $(".firstdiv").hide();
  //     $(".seconddiv").show();
  //     $(".pasworddiv").hide();
  //   });
  //   $(".signinbtn").click(function(){
  //     $(".firstdiv").show();
  //     $(".seconddiv").hide();
  //     $(".pasworddiv").hide();
  //     $(".loginbtn").show();
  //     $(".forgtpwd").show();
  //   });
  //   $(".btncontainer").click(function(){
  //     $('.btncontainer').addClass("active");
  //     $(".seconddiv").hide();
  //     $(".forgtpwd").hide();
  //     $(".socialmicrosoft").hide();
  //     $(".sociallinkedin").hide();
  //     $(".socialtwitter").hide();
  //     $(".socialfacebook").hide();
  //     $(".socialall").hide();
     
      
  //   });
  //   const btncontainer = document.querySelector('.btncontainer');
  //   const pasworddiv = document.querySelector('.pasworddiv');
  //   btncontainer.addEventListener('animationend', () => {

  //     btncontainer.style.display="none";
  //     pasworddiv.style.display="block";
  //   });
  // });
 
  return (
    
  //   <div className="App">
  //     <Container>
  //       <Centerdiv className='Rightdiv'>
    
       
  //         <form className="forms">
  //         <img src={mainlogo} alt="logo" />  
  //                 <div className="firstdiv" >
  //                <p className='headtxt'>Sign In</p>
  //                 <p className='subheadtxt'>to access POS home</p>
  //                 <input type="text" className='email' placeholder='Enter your email' />
                 
  //                 <div className="pasworddiv">
  //                 <br />
  //                 <span ><input type="text" name="sampleInputone" placeholder='Enter your Password'/><FaEyeSlash className='fonteye' /></span>
  //                 <button className='signinBtn'>Signin</button>
  //                 <div className="otplinks">
  //                   <a href="/" className='sendotp'>sign in using OTP</a>
  //                   <a href="/" className='forgptpassword'>Forgot Password?</a>
  //                 </div>
  //                 </div>
  //                 <div className="btncontainer" onClick="this.classList.toggle('active')">
  //                     <span className="text">LOGIN</span>
  //                   <span className='loader'></span>
  //                 </div>
  //                 <a href="/forgotpwds" className='forgtpwd'>Forgot Password?</a>
                
  //                 <br /><br /><br />  
  //                 <Socialcontainer>
  //                   <button className='scocialimgbtn socialgoogle'><span className="icontxt"><img src={google} alt="Google logo" className="iconimg" /><span className='googleicontxt'>&ensp;Google</span></span></button>
  //                   <button className='scocialimgbtn socialmicrosoft'><img src={microsoft} alt="microsoft logo"className="iconimg" /></button>
  //                   <button className='socialbtn sociallinkedin'><FaLinkedin className='socialicon' /></button>
  //                   <button className='socialbtn socialtwitter'><FaTwitter className='socialicon' /></button>
  //                   <button className='socialbtn socialfacebook'><FaFacebook className='socialicon' /></button>
  //                  <button type='button' className='socialbtn socialall'><FaEllipsisH className='socialicon socialall'></FaEllipsisH></button>
  //                 </Socialcontainer>
  //               </div>
              
                
  //           <div className="seconddiv" >
  //           <p className='headtxt'>Sign in using</p>
  //           <Socialcontainer>
  //             <button className='scocialimgbtn socialgoogle moreIcon'><a href="/"><span className="icontxt"><img src={google} alt="Google logo" className="iconimg" /><span className='googleicontxt'>&ensp;Google</span></span></a></button>
  //             <button className='scocialimgbtn socialmicrosoft moreIcon'><a href="/"><span className="icontxt"><img src={microsoft} alt="Google logo" className="iconimg" /><span className='socialiconstext'>&ensp; Microsoft</span></span></a></button>
  //             </Socialcontainer>
  //             <Socialcontainer>
  //             <button className='socialbtn sociallinkedin moreIcon'><a href="/"><span className="icontxt"><span className='socialiconstext'>&ensp;Linked</span><FaLinkedin className='socialLinkedicon socialiconsall' /></span></a></button>
  //             <button className='socialbtn socialfacebook moreIcon'><a href="/"><span className="icontxt"><FaFacebook className='socialappleicon socialiconsall' /><span className='socialiconstext'>&ensp;Facebook</span></span></a></button>

  //             </Socialcontainer>
  //             <Socialcontainer>
  //             <button className='socialbtn socialtwitter moreIcon'><a href="/"><span className="icontxt"><FaTwitter className='socialappleicon socialiconsall' /><span className='socialiconstext'>&ensp;Twitter</span></span></a></button>
  //             <button className='scocialimgbtn socialmicrosoft moreIcon'><a href="/"><span className="icontxt"><FaApple className='socialappleicon socialiconsall' /><span className='socialiconstext'>&ensp;Sign in with apple</span></span></a></button>
  //           </Socialcontainer>
  //           <br />
  //         <button type='button' className='signinbtn'>Signin with Hilife.AI</button>
       
  //         </div>
          
        
  //           <br />
  //         </form> 
  //       </Centerdiv>
  //       <Centerdiv className='leftdiv'>
  //         <CarouselComponent></CarouselComponent>
  //         </Centerdiv>
        
  //     </Container> <br /><br />
  //     <div className="footer"></div>
  //     <span>Don't have an account? <a href="/singup" className='bottomlink'> Sign Up Now</a></span>
  //     <br /><br />
  //     <span className='hearts'>Made with &ensp;<FaHeart className='heart' /> &ensp; in Trichy  &ensp;| &ensp; திருச்சியில் உருவாக்கப்பட்டது &ensp;<FaHeart className='heart' />  </span>
  //     <br /><br />
   

  //   </div>

<Importcontacts></Importcontacts>
);
  

 
}

export default App;
