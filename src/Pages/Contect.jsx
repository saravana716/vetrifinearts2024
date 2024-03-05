import React from "react";
import "./contect.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../Assets/images/download.png"
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer/Footer";
import emailjs from "emailjs-com"
import { useState } from "react";
const Contect = () => {
  const [message, setMessage] = useState(false);
  const [data, setData] = useState({ firstname: "", mobile: "", useremail: "", message: "" });
  const [error, setError] = useState({ firstname: false, mobile: false, useremail: false, message: false });

  function getdata(e) {
    const myname = e.target.name;
    const myvalue = e.target.value;
    if (myname === "mobile" && !/^[0-9]{10}$/.test(myvalue)) {
      setError((prevState) => ({ ...prevState, mobile: true }));
    } 
    else if (myname === "useremail" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(myvalue)) {
      setError((prevState) => ({ ...prevState, useremail: true }));
    } 
    else {
      setData({ ...data, [myname]: myvalue });
      setError({ ...error, [myname]: false });
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    let hasError = false;

    // Check for empty fields
    for (const key in data) {
      if (data[key].trim() === "") {
        setError((prevState) => ({ ...prevState, [key]: true }));
        hasError = true;
      }
    }

    if (!hasError) {
      emailjs
        .sendForm("service_xlp14zn", "template_67lcefj", e.target, "tseDxCK7xlhfwvfCI")
        .then((res) => {
          console.log(res);
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
            // Reset all input box values to empty strings
            setData({ firstname: "", mobile: "", useremail: "", message: "" });
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


//   const [mesaage, setmesaage] = useState(false)
//   const [data, setdata] = useState({firstname:"",mobile:"",useremail:"",message:""})
//   const [error, seterror] = useState({firstname:false,mobile:false,useremail:false,message:false})
//   function getdata(e) {
//     const myname=e.target.name
//     const myvalue=e.target.value
//     if (myname === "mobile" && !/^[0-9]{10}$/.test(myvalue)) {
//       seterror((prevState) => ({ ...prevState, mobile: true }));
//     } 
//     else if (myname === "useremail" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(myvalue)) {
//       seterror((prevState) => ({ ...prevState, useremail: true }));
//     } 
//     else {
//       setdata({ ...data, [myname]: myvalue });
//       seterror({ ...error, [myname]: false });
//     }
  
//   }

// // function sendEmail(e) {
// //   e.preventDefault()

// //   if(data.firstname==""){
// //     seterror({...error,firstname:true})
// //   }
// //   else if(data.mobile==""){
// //     seterror({...error,mobile:true})
// //   }
// //   else if(data.useremail==""){
// //     seterror({...error,useremail:true})
// //   }
// //   else if(data.message==""){
// //     seterror({...error,message:true})
// //   }

// //    if (data.firstname!="" && data.mobile!="" && data.useremail!="" && data.message!="") {
// //     emailjs.sendForm("service_xlp14zn","template_67lcefj",e.target,"tseDxCK7xlhfwvfCI").then(res=>{console.log(res)}).catch(err=>{console.log(err)});
// //     console.log("kndkn");
// //     console.log(data);

// //    }
// // }
// function sendEmail(e) {
//   e.preventDefault();

//   let hasError = false;

//   // Check for empty fields
//   for (const key in data) {
//     if (data[key].trim() === "") {
//       seterror((prevState) => ({ ...prevState, [key]: true }));
//       hasError = true;
//     }
//   }

//   if (!hasError) {
//     emailjs
//       .sendForm("service_xlp14zn", "template_67lcefj", e.target, "tseDxCK7xlhfwvfCI")
//       .then((res) => {
//         console.log(res);
//         console.log("kndkn");
//     console.log(data);
// setmesaage(true)
// setTimeout(() => {
//   setmesaage("")
//   setdata({ ...data});

// }, 1000);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
    
//   }
// }

  return (
    <>
    <Navbar />
      <div className="contact">
        <div className="contact1">
          <h1>CONTACT US</h1>
          <p>Ready To Start</p>
        </div>
      </div>
      <div className="contactmap">
        <div className="contactmap1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.4194549787553!2d77.80253487450311!3d9.472195981895165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf5fbdaf8a35%3A0xdc04f69b4af62534!2sVetri%20Fine%20Arts%20Note%20Book%20Company!5e0!3m2!1sen!2sin!4v1708452454730!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      
      <div className="contacts">
        <div className="contact112">
          <div className="contact2">
          <div className="contact4">
            <div className="contact5">
              <img src={logo} alt="" />
            </div>
            <div className="contactcon">
            <h1>VETRI FINE ARTS</h1>
        <h2>NOTE BOOK COMPANY</h2>
        <h3>QUALITY NOTE BOOKS MANUFACTURER</h3>
            </div>
          </div>
          <div className="contact6">
<span>
<FaLocationDot className="contacticon" />
  </span>    <p>No 463, Virudhunagar, Main Road, Thiruthangal, Sivakasi, Tamil Nadu 626130. (Near By Mahindra Show Room).</p>
          </div>
          <div className="contact6">
<span>
<MdEmail className="contacticon" />
  </span>     <p>vetrifineartsnbc@gmail.com</p>
          </div>
          
          <div className="contact8">
          <div className="contact88">
           <h3>Office</h3>
            
            <div className="checkcon">
            <p><FaPhoneAlt className="picon" /></p>
            <h6>+91 7868090552</h6>
            </div>
           </div>
           <div className="contact88">
           <h3>Personal</h3>
            
            <div className="checkcon">
            <p><FaPhoneAlt className="picon" /></p>
            <h6>+91 8610561369</h6>
            </div>
           </div>
          </div>
          
          </div>
          <div className="contact3">
            <h5></h5>
<div className="contact10">
<div className="message">
      {message && <p>We will be in touch shortly</p>}
      </div>
  <h1>Contact us</h1>
 <form onSubmit={sendEmail}>
 <input type="text" name="firstname" placeholder="Name *" onChange={getdata}/>
 {error.firstname && <p>Enter Your Name</p>}
  <input type="tel" name="mobile"  maxLength={10} placeholder="Your Phone Number *" onChange={getdata}/>
{error.mobile &&  <p>Enter Your Mobile Number</p>}

  <input type="email" name="useremail" placeholder="Your Email *" onChange={getdata}/>
{error.useremail &&  <p>Enter Your Email</p>}

  <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message Here" onChange={getdata}></textarea>
{error.message &&  <p>Enter Message here</p>}

  <button type="submit">SUBMIT</button>
 </form>
</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contect;
