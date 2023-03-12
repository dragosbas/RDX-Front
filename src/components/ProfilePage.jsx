import React, { useContext, useState } from 'react'
import { useAtom } from 'jotai'
import { userState } from '../state'
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../helpers/axios';
function ProfilePage() {
    const [currentUser,] = useAtom(userState.currentUser);
    const [formFields,setFormFields]=useState(currentUser)
    const { updateProfile } = useContext(AuthContext);
    
    const handleFormChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })
    }

    const editProfile = async () => {
        try {
          const req = await axiosInstance.put("/user", {
              textCv: formFields.textCV
            
          });   
          const data = req.data;
          console.log(data);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="chatview">
            <main className='chatview__chatarea'>

            <p>Name</p> 
            <textarea className='chatview__textarea-message' name="name" value={formFields.name} onChange={handleFormChange} />
            <p>Text Cv</p> 
            <textarea className='chatview__textarea-message' name="textCV" value={formFields.textCV} onChange={handleFormChange} />
            <h1> _</h1>
            
            <button className='chatview__btn-send' disabled={false} onClick={() => {updateProfile(formFields)}}>Update</button>
            <form className='form'>
                <button className='chatview__btn-send' disabled={false} onClick={ editProfile() } >Send</button>
                <textarea className='chatview__textarea-message'/>
            </form>
            </main>
        </div>
    )
}

export default ProfilePage