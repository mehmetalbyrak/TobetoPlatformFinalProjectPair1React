import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CheckUser from './Services/UserService';

function App() {
  // useEffect(()=>{
  //   console.log(CheckUser("eposta","şifre").then(result=>result.data.items));
  // },[]);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [user,setUser]=useState({});

  useEffect(()=>{    
    console.log("Doğrulanan Kullanıcı");
    console.log(user);
  },[user]);
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" width={100} />        
      </header>
      <main>
        <input type='text' placeholder='E-Mail' onChange={email=>setEmail(email.target.value)}/><br/>
        <input type='text' placeholder='Password' onChange={password=>setPassword(password.target.value)}/><br/>
        <button onClick={()=>{

          setUser(CheckUser(email,password).then(result=>result.data))
          
          }}>Giriş Yap</button>
      </main>
    </div>
  );
}

export default App;
