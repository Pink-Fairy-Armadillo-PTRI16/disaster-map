import React, {useState} from 'react';

const SubmitPage = ()=> {
    const [firstName, setFirstName] = useState ('');
    const [lastName, setLastName] = useState('');
    const [description, SetDescription] = useState('')

    return (
        <div className='submit-container'>
            <h1 className='submitHeader'>Submit Disaster Info</h1><br/>

            <form id='submit'>
                <label for='firstname'>First Name: </label><br/>
                <input type='text' id='firstname' name='firstname' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/><br/>
                <label for='lastname'>Last Name: </label><br/>
                <input type='text' id='lastname' name='lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)} /><br/>
                <label for="country">Country:</label><br/>
                <select id="country" name="country">
                <option value="usa">USA</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                </select><br/>
                <label for='incident'>Incident Description: </label><br/>
                <input type='textbox' value={description} onChange={(e)=>SetDescription(e.target.value)}/><br/>
                <input type='Submit' value='Submit'/>
            </form>
        </div>
    )
};

export default SubmitPage;