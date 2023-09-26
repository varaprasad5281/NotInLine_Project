import React, {useState} from 'react'
import './index.css'

const ContactForm = ()=>{
    const [userDetails, setUserDetails] = useState({id:0})
    const [userForm,setUserForm] = useState([])
    const [error, setError] = useState({eName:false,ePhone:false,eLocation:false})

    const onChangeUserDetails = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setUserDetails({...userDetails,[name]:value})
    }

    const onFormSubmiting = (e)=>{
        e.preventDefault()
        if(userDetails.name && userDetails.phone && userDetails.location){
            const ids = userDetails.id + 1
                setUserForm([...userForm,userDetails])
                setUserDetails({id:ids,name : "", phone:"", location:""})
                alert("form sucessfully submited")
        }else{
            const obj = {
                eName: userDetails.name ? false : true ,
                ePhone: userDetails.phone ? false : true ,
                eLocation: userDetails.location ? false : true 
            }
            setError({...error,...obj})
        }
    }
    return(
            <div className='bg-container'>
                    <div className='form-bg-container'>
                    <h1 className='heading-img rti'><span className='span-img'>Best in class </span> lab tests!</h1>
                        <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290686/Vector_4_k6itq9.svg' alt='underlogo' className='line-img rti' />
                        <form className='form-container' onSubmit={onFormSubmiting}>
                            <h3 className='form-heading'>Fill in the details to get a call!</h3>
                            <div className='input-container names'>
                                <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290682/person_imt1ja.svg" alt='namelogo' className='form-image' />
                                <input type='text' name='name' value={userDetails.name} onChange={onChangeUserDetails} onBlur={(e)=>setError({...error,eName:e.target.value ? false: true})} placeholder='Full name' className='name ' />
                                {error.eName && <p className='err1'>Enter Full name please</p>}
                            </div>
                            <div className='input-container phones'>
                                <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290682/call_vql80n.svg" alt='Phonelogo' className='form-image'  />
                                <input type='tel' name='phone' value={userDetails.phone} onChange={onChangeUserDetails} onBlur={(e)=>setError({...error,ePhone:e.target.value ? false: true})} placeholder='Enter phone number' className='name ' />
                                {error.ePhone && <p className='err2'>Enter phonr number please</p>}
                            </div>

                            <div className='input-container locations'>
                                <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290682/distance_cb0ali.svg" alt='locationlogo' className='form-image'  />
                                <input type='text' name='location' value={userDetails.location} onChange={onChangeUserDetails} onBlur={(e)=>setError({...error,eLocation:e.target.value ? false: true})} placeholder='Enter location' className='name' />
                                {error.eLocation && <p className='err3'>Enter your Location please</p>}
                            </div>
                            <div className='input-container'>
                                <input type='checkbox' id='checkbox' className='check' />
                                <label htmlFor='checkbox' className='check-lab' >By continuing, you agree to our T&C and privacy policy</label>
                            </div>
                            <input type='submit' value="Proceed" className='btn-submit'/>
                        </form>
                        <div className='btn-off'>
                            <button type='button' className='btn-price' >Get a Full Body Checkup <span className='spass'>Now</span> at <span className='spa1'>&#8377;5,999</span> <span className='spa2'>&#8377;999</span> </button>
                            <button type='button' className='btn-price2' >70% OFF</button>
                        </div>
                        <div className='btn-off-on'>
                            <button type='button' className='btn-price' >Get a Full Body Checkup <span className='spass'>Now</span> at  </button>
                            <button type='button' className='btn-price2' ><span className='spa1'>&#8377;5,999</span> <span className='spa2'>&#8377;999</span> 70% OFF</button>
                        </div>
                    </div>



                    <div className='test-image-container'>
                        <h1 className='heading-img'><span className='span-img'>Best in class</span> lab tests!</h1>
                        <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290686/Vector_4_k6itq9.svg' alt='underlogo' className='line-img' />
                        <div className='image-container'>
                            <div className='img-text-container1 img-text-container'>
                                <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290683/Ellipse_1_dywipn.svg' alt='tlogo' width="35"  height="35" />
                                <p className='para-small'>Timely sample collection</p>
                            </div>
                            <div className='img-text-container2 img-text-container'>
                                <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_2_cwxc0o.svg' alt='tlogo' width="35"  height="35" />
                                <p className='para-small'>Complementary report consultation</p>
                            </div>
                            <div className='img-text-container3 img-text-container'>
                                <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_3_gke4xd.svg' alt='tlogo' width="35"  height="35" />
                                <p className='para-small'>Accurate timely report</p>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default ContactForm