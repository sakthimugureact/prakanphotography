import React, { useState } from 'react'

function useForm() {
    const [values, setValues] = useState({
        user: '',
        phone:'',
        email: '',
        city: '',
        event:'',
        location:'',
        venue:'',
        crowd:'',
        message:'',
        time:'',
        date:''
      });

      const [err, setErr] = useState({
        user: '',
        phone:'',
        email: '',
        city: '',
        event:'',
        location:'',
        venue:'',
        crowd:'',
        message:'',
        time:'',
        date:''
      });
    
      const [details,setDetails] = useState({
        userName:'',
        bookingDate:'',
        service:'',
        amount:''
        })
      
      const [error,setError] = useState({
        userName:'',
        bookingDate:'',
        service:'',
        amount:''
      })

      const [reg,setreg] = useState({
        name:'',
        email:'',
        password:'',
        cmpass:''
      })

      const[regerr,setRegerr] = useState({
        name:'',
        email:'',
        password:'',
        cmpass:''
      })

      const [loginvalues,setLoginvalues] = useState({
        email:"",
        password:""
      })
      const [loginerr,setLoginerr] = useState({
        email:"",
        password:""
      })

      const registerVaidation = (e) =>{
        const {name,value} = e.target;
        setreg({...reg,[name]:value});
        setRegerr({...regerr,[name]:''})
      }

      const loginValidation = (e) =>{
        const {name,value} = e.target;
        setLoginvalues({...loginvalues,[name]:value});
        setLoginerr({...loginerr,[name]:""})
      }

      const detailValidation = (e) =>{
        const {name,value} = e.target;
        setDetails({...details,[name]:value});
        setError({...error,[name]:''})
      }
      const formValidation = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name] : value });
        setErr({ ...err, [name]: '' }); 
      };

      const validateRegister = () =>{
        let newErr = {};
        let isValid = true;

        if (!reg.name.trim()) {
          newErr.name = 'Name Required';
          isValid = false;
        }

        if (!reg.email.trim()) {
          newErr.email = 'Email Required';
          isValid = false;
        } 
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(reg.email)) {
          newErr.email = 'Enter a Valid Email';
          isValid = false;
        }

        if(!reg.password.trim()){
          newErr.password="Password Required";
          isValid = false
        }

        if(!reg.cmpass.trim()){
          newErr.cmpass="Password Required";
          isValid = false
        }
        else if(reg.password!==reg.cmpass){
          newErr.cmpass="Password Not Matched";
          isValid = false
        }
        setRegerr(newErr);
        return isValid;
      }

      const validateLogin = (e) =>{
        let newErr = {};
        let isVal = true;
  
        if (!loginvalues.email.trim()) {
          newErr.email = 'Email Required';
          isVal = false;
        } 
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(loginvalues.email)) {
          newErr.email = 'Enter a Valid Email';
          isVal = false;
        }
  
        if (!loginvalues.password.trim()) {
          newErr.password = 'Password Required';
          isVal = false;
        } 
  
        setLoginerr(newErr)
        return isVal;
      }

      const validateDetails = () =>{
        let newErr = {};
        let isValid = true;

        if (!details.userName.trim()) {
          newErr.userName = 'Name Required';
          isValid = false;
        }

        
        if(!details.bookingDate.trim()){
          newErr.bookingDate="Date Required";
          isValid = false
        }

        if(!details.service.trim()){
          newErr.service="Service Required";
          isValid = false
        }

        if(!details.amount.trim()){
          newErr.amount="Amount Required";
          isValid = false
        }
        setError(newErr);
        return isValid;
      }
      

      const validateForm = () => {
    
        let newErrors = {};
        let isValid = true;
    
        if (!values.user.trim()) {
          newErrors.user = 'Name Required';
          isValid = false;
        }
    
        if (!values.email.trim()) {
          newErrors.email = 'Email Required';
          isValid = false;
        } 
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
          newErrors.email = 'Enter a Valid Email';
          isValid = false;
        }

        if(!values.phone.trim()){
          newErrors.phone = 'Phone Number Required'
          isValid = false
        }
        else if(!/^\d{10}$/.test(values.phone)){
          newErrors.phone='Enter a Valid Number'
          isValid = false
        }
    
        if (!values.city.trim()) {
            newErrors.city = 'City Required';
            isValid = false;
          } 

          if (!values.event.trim()) {
            newErrors.event = 'Event Type Required';
            isValid = false;
          } 

          if (!values.location.trim()) {
            newErrors.location = 'Location Required';
            isValid = false;
          } 

          if (!values.venue.trim()) {
            newErrors.venue = 'Venue Required';
            isValid = false;
          } 

          if (!values.crowd.trim()) {
            newErrors.crowd = 'Croud Value Required';
            isValid = false;
          } 
          if (!values.time.trim()) {
            newErrors.time = 'Time Required';
            isValid = false;
          } 

          if(!values.date.trim()){
            newErrors.date="Date Required";
            isValid = false
          }
  
          if (!values.message.trim()) {
            newErrors.message = 'Messsage Required';
            isValid = false;
          } 
        setErr(newErrors);
        return isValid;
      };
  
 return{formValidation,values,err,validateForm,details,detailValidation,validateDetails, setLoginerr,error,reg,regerr,registerVaidation,validateRegister,loginvalues,loginerr,loginValidation,validateLogin}

}

export default useForm