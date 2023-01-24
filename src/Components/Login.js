import React,{useState} from 'react'
import styles from './Login.module.css'

import { Link, Route, Router, Routes,useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const[name, setName] = useState('')
    const[password, setPassword] = useState('')

    const dummyName = 'sush'
    const dummyPassword = '123'
    const handleSubmit = e => {
        e.preventDefault()
        if(name != ' ' && password != ''){
            navigate('/Home',{state:{name:name}});
        }
        else
        alert('invalid login')
        
    }
    
  return (
    <div className={`${styles.bgimage} ${styles.text}`} >
      
        <form className={styles.container}  onSubmit={handleSubmit}>
            <h1 id='header-text'>LOGIN</h1>
            <div>
                <label>Name</label>
                    <input type='text' className={styles.inputStyle} value={name} placeholder='enter your name' onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div>
                <label>Password</label>
                <input type='text' className={styles.inputStyle} value={password} placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button type='submit' className={`${styles.btn} ${styles.text}`}  >Login</button>
            <Link to={'SignUp'}>
                <h5 id='text-footer'>New user? Sign up</h5>
            </Link>
            
        </form>
    
    </div>
  )
}

export default Login