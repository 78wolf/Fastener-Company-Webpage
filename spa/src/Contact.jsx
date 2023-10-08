import { useState } from 'react';
import './Contact.css';
import DropdownWithOther from './DropdownWithOther';

function Contact(){
  const initialValues ={username:"", email:"", password:""};
  const [formValues, setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handelChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
   }

   const handelSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
   };

   const validate = (values) => {
    const errors ={};
    if(!values.username){
      errors.username = "Username is required"
    }
     if (!values.email) {
       errors.email = "Email is required"
     }
     if (!values.password) {
       errors.password = "Password is required"
     }
     return errors;
   }
  return(
    <div className='form'>
      {Object.keys(formErrors).length === 0 && isSubmit ? <div className='form__success'>Thank Your For Subscirbing!!</div> : ""}

      <form className='form__main'onSubmit={handelSubmit}>
        <h2 className='form__title'>Subscirbe Our Newsletter</h2>
        <div className='form__filed'>
          <div className='form__item'>
            <label>Username</label>
            <input 
            type='text' 
            name='username' 
            placeholder='Username'
            value={formValues.username}
            onChange={handelChange}
            />
          </div>
          <p className='form__error'>{formErrors.username}</p>
          <div className='form__item'>
            <label>Email</label>
            <input 
            type='email' 
            name='email'
            placeholder='Email'
            value={formValues.email}
            onChange={handelChange} />
          </div>
          <p className='form__error'>{formErrors.email}</p>
          <div className='form__item'>
            <label>Password</label>
            <input 
            type='password' 
            name='password' 
            placeholder='Password'
            value={formValues.password} 
            onChange={handelChange}/>
          </div>
          <p className='form__error'>{formErrors.password}</p>
          <DropdownWithOther/>
          <button className='form__button'>Submit</button>
        </div>
      </form> 
    </div>
  )
}


export default Contact;