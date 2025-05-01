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
  
 return{formValidation,values,err,validateForm,details,detailValidation,validateDetails,error}

}

export default useForm