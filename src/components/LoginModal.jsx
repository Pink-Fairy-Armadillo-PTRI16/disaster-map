import React, { useState, useEffect } from 'react';

function LoginModal(){
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in....', username, password);
    }

    // const handleGoogleLoginSuccess = (response) =>{
    //     console.log('Google login success', response);
    // };

    // useEffect(() => {
    //     if (isOpen) {
    //         if (window.google) {
    //             console.log('Initializing Google Auth....');

    //         window.google.accounts.id.initialize({
    //             client_id:"150015789584-tddd8oj9nihh4menp9fcuudn37ccguol.apps.googleusercontent.com",
    //             callback: handleGoogleLoginSuccess,
    //         });

    //         const googleButtonElement = document.getElementById('google-signin-button');

    //         if (googleButtonElement){
    //             window.google.accounts.id.renderButton(
    //                 googleButtonElement,
    //                 { theme: 'outline', size: 'large' }
    //             );
    //             console.log('Google button render');
    //         } else {
    //             console.error('Element with ID');
    //         }
    //         } else {
    //             console.error('Google API script not rendered!');
    //         }
    //     }
    // }, [isOpen]);

    // const handleLoginSubmit = async (e) => {
    //     e.preventDefault();
    // }

    return (
        <div>
            <button className='header-btn' onClick={()=> setIsOpen(true)}>Login</button>

            {isOpen && (
                <div className='modal'>
                    <div className='modal-content animate'>

                        <img src="https://thumbs.dreamstime.com/b/welcome-16386302.jpg" width='400px' height='200px'/>
                        <form>
                            <div>
                                <label htmlFor='username'>Username: </label>
                                <input 
                                type='text'
                                id='username'
                                value={username}
                                onChange={(e)=> setUsername(e.target.value)} />
                                 </div>
                                 <div>
                                    <label htmlFor='password'>Password: </label>
                                <input 
                                type='text'
                                id='password'
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)} />
                                 </div>
                                 <div>
                                 <button type='button' onClick={handleLogin}>Login</button>
                                 <button type='button' onClick={() => setIsOpen(false)}>Close</button>
                                 </div>
                                 {/* <div id='google-signin-button'></div> */}
                                 </form>
                        </div>
                        </div>
            )}
        </div>
    );
}

export default LoginModal;