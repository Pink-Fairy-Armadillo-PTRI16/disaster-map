import React, { useState } from 'react';

function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here, e.g., send credentials to server
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Login</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content animate">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <h2>Welcome!</h2>
            <form>
              <div>
                <label htmlFor="username">Username:</label>
                <input 
                  type="text" 
                  id="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input 
                  type="password" 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <button type="button" onClick={handleLogin}>Login</button>
              <button type="button" onClick={() => setIsOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;