import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const [allValues, setAllValues] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const options = {
    method: 'POST',
    url: 'http://127.0.0.1:3000/user',
    params: { name: allValues.userName, email: allValues.email, password: allValues.password },
    // headers: { Authorization: 'Basic Og==' },
    data: {}
  };

  const changeHandler = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (allValues.password === allValues.confirmPassword) {
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      navigate('/Home ');
      // window. location. reload(false); 
    } else {
      alert('Your passwords are not matching')
    }
  }

  return (
    <div className={styles.bgColor}>
      <div className={styles.wrapper}>
        <h1 >SIGNUP</h1><hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type='text' name='userName' className={styles.inputStylee} placeholder='enter your name' value={allValues.userName} onChange={changeHandler} required />
          </div>
          <div>
            <label>Email</label>
            <input type='text' name='email' className={styles.inputStylee} placeholder='enter your email' value={allValues.email} onChange={changeHandler} required />
          </div>
          <div>
            <label>Password</label>
            <input type='text' id='password' className={styles.inputStylee} name='password' placeholder='enter your password' value={allValues.password} onChange={changeHandler} required />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type='text' name='confirmPassword' className={styles.inputStylee} placeholder='re-enter your password' value={allValues.confirmPassword} onChange={changeHandler} required />
          </div>
          <div>
            <button type='submit' className={styles.btn1}>Sign In</button>
          </div>
        </form>
        {/* {
          (allValues.password == allValues.confirmPassword)?  console.log('yes') : console.log('no') 
        } */}

      </div>
    </div>
  )
}

export default SignUp


// const options = {
//   method: 'POST',
//   url: 'http://127.0.0.1:3000/user',
//   params: { name: 'sohail', email: 'sohailAhmed', password: '123456' },
//   headers: { Authorization: 'Basic Og==' },
//   data: {}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });