import React, { useState, useEffect } from 'react';

function LoginModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in...', username, password);
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success:', response);
    };

    useEffect(() => {
        // Load the Google API script dynamically if it's not already loaded
        const loadGoogleScript = () => {
            if (!window.google) {
                const script = document.createElement('script');
                script.src = 'https://accounts.google.com/gsi/client';
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);

                script.onload = () => {
                    console.log('Google script loaded successfully');
                };
            }
        };

        loadGoogleScript();

        if (isOpen && window.google) {
            console.log('Initializing Google Auth...');

            window.google.accounts.id.initialize({
                client_id: '574345277539-8pb21jokbpsoacq9sk7ba0a7ont6rj43.apps.googleusercontent.com',
                callback: handleGoogleLoginSuccess,
            });

            const googleButtonElement = document.getElementById('google-signin-button');

            if (googleButtonElement) {
                window.google.accounts.id.renderButton(googleButtonElement, {
                    theme: 'filled_blue',
                    size: 'large',
                    shape: 'pill'
                });
                console.log('Google button rendered');
            } else {
                console.error('Element with ID "google-signin-button" not found');
            }
        }
    }, [isOpen]);

    return (
        <div>
            <button className='header-btn' onClick={() => setIsOpen(true)}>Login</button>

            {isOpen && (
                <div className='modal'>
                    <div className='modal-content animate'>
                        <img src='https://thumbs.dreamstime.com/b/welcome-16386302.jpg' width='400px' height='200px' alt='Welcome' />

                        <form>
                            <div>
                                <label htmlFor='username'>Username: </label>
                                <input
                                    type='text'
                                    id='username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor='password'>Password: </label>
                                <input
                                    type='text'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type='button' onClick={handleLogin}>Login</button>
                                <button type='button' onClick={() => setIsOpen(false)}>Close</button>
                            </div>

                            <div id='google-signin-button' style={{ marginTop: '20px' }}></div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginModal;
