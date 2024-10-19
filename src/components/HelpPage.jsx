import React from 'react';

const styles = {
    container: {
        textAlign: 'center',
        // padding: '2rem',
        // backgroundImage: "url('https://example.com/your-background-image.jpg')", // Replace with your image URL
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        // color: '#fff',
        // fontFamily: 'Arial, sans-serif',
        // minHeight: '100vh',
    },
    // header: {
    //     fontSize: '3rem',
    //     color: '#e74c3c',
    //     marginBottom: '1.5rem',
    // },
    body: {
        fontSize: '1.5rem',
        lineHeight: '1.8',
        backgroundColor: 'rgba(211, 211, 211, 0)', // Adding a slight background color for contrast
        padding: '1.5rem',
        borderRadius: '8px',
        display: 'inline-block',
    },
    link: {
        color: 'blue',
        textDecoration: 'none',
    },
    h2: {
        fontSize:'2rem',
    },
    title: 
    {
    }
};
const HelpPage = () => {
    return (
        <div className="get-help-container">
            <h1 style={styles.title}><b><center>Get Help</center></b></h1>

            <div>
                <div className='RedCrossImg' >
                <center><img class='image' src="https://franklinchristianchurch.com/wp-content/uploads/2022/10/american-red-cross-logo-png-transparent.webp" alt="redcross" width="20%" /></center> 
                {/* <div class='overlay'>
                    <div class='text'>RED CROSS</div>
                    </div> */}
                </div>
                
                    
                <h2 style={styles.h2}>
                    <center>If you are in immediate need of help, <br />
                    please contact{' '}
                    <a href='https://www.redcross.org/find-your-local-chapter.html' style={styles.link}>
                        <em>your local Red Cross</em>
                    </a>{' '}
                    or{' '}
                    <a href='https://www.redcross.org/get-help/disaster-relief-and-recovery-services/find-an-open-shelter.html' style={styles.link}>
                        <em>find an open shelter.</em>
                    </a></center>
                </h2>
            </div>
        </div>
    );
};


export default HelpPage;
