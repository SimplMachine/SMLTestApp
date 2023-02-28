import { useState } from "react";
export default function Index() {
  const [inputValue, setInputValue] = useState("");
  return (
    <section>
      <h1>Simpl Machine</h1>
      <div className='login-container'>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className='email-address'
          placeholder='Enter your email'
        />
        <div className='button-container'>
          <button className='sign-up'>Sign Up</button>
          <button id='login'>Login</button>
        </div>
      </div>
    </section>
  );
}
