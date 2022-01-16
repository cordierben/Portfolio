import '../style/Contact.css';
import React, { useState,useRef } from 'react'
import emailjs from 'emailjs-com';
import ids from '../utils/emailKey';


function Contact() {

    const[name,setName] = useState()
    const[email,setEmail] = useState("")
    const[subject,setSubject] = useState()
    const[message,setMessage] = useState()
    const[error,setError] = useState({color:'transparent'})
    const[errorMsg,setErrorMsg] = useState("Message sent!")
  
    const form=useRef()

    const sendEmail = (e) => {
        if(email.indexOf('@')!=-1 && email.indexOf('.')!=-1 && name!=null && subject!=null && message!=null){
            emailjs.sendForm(ids.SERVICE_ID, ids.TEMPLATE_ID, form.current, ids.USER_ID)
            .then((result) => {
                setErrorMsg("Message sent!")
                setError({color:'green'})
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        } else {
            setError({color:'red'})
            setErrorMsg("An error occured. Email must be valid and informations can't be empty")
        }
    };

    return (
    <div className="contact">
        <h1 id="backTitle">Contact</h1>
        <h2 id="title">Contact</h2>
        <div id="contactForm">
            <form ref={form}>
            <div id="contactDesc">A project? A request or a question? Don't hesitate to use this form, I will answer you as soon as I can!</div>
            <input id="inputName" placeholder="Name" name="name" onChange={e=>setName(e.target.value)}/>
            <input id="inputEmail" placeholder="Email" name="mail" onChange={e=>setEmail(e.target.value)}/>
            <input id="inputSubject" placeholder="Subject" name="subject" onChange={e=>setSubject(e.target.value)}/>
            <textarea id="inputMessage" placeholder="Message" name="message" onChange={e=>setMessage(e.target.value)}/>
            <input id="submit" value="Send Message" onClick={sendEmail}/>
            <div id="error" style={error}>{errorMsg}</div>
            </form>
        </div>
        
    </div>
  )
}

export default Contact;





