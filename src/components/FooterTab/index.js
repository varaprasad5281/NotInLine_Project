import React, {useState} from 'react'
import "./index.css"

const FooterTab = ()=>{
    const [number,setNumber] = useState("")
    return(
        <div className='footer-bg-container'>
            <div className='f-cards-container'>
                <div className='f-container'>
                    <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290684/NIL_logo.png" alt="website-logo" className='logo' />
                    <p className='paragraph'>Book doctor appointments online and get your ailments treated in no time with our expert medical support systems. Get rid of all your medical problem with our expert panel of doctors who guide you towards a healthier life.</p>
                    <form onSubmit={e=> e.preventDefault()} className='fr'>
                    <input type='submit'  className='nums' value="+91" name='+91' />
                    <input type="tel" value={number} onChange={e=>setNumber(e.target.value)}  className='num-input'/>
                    <label className='lab'>
                        <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695339107/call_1_gave0e.svg' alt='call' width="30px" height="30px" />
                    </label></form>
                </div>
                <div className='ul-containers'>
                <ul className='serv'>
                    <li><h2 className='h'>Services</h2></li>
                    <li>Appointments</li>
                    <li>Lab tests</li>
                    <li>A-Z medicine</li>
                    <li>Doctor support</li>
                </ul>
                <ul className='serv'>
                    <li><h2 className='h'>Legal</h2></li>
                    <li>Ceneral info</li>
                    <li>Privacy policy</li>
                    <li>Terms of Services</li>
                    <li>consultation</li>
                    <li>How it works</li>
                </ul>
                <ul className='serv'>
                    <li><h2 className='h'>Talk to Us</h2></li>
                    <li><a href='mailto:support@notinline.com'>support@notinline.com</a></li>
                    <li><a href='mailto:appointment@notinline.com'>appointment@notinline.com</a></li>
                    <li><a href='tel:+91-1234567899'>+91 1234567899</a></li>
                    <li><a href='tel:+91-9764209752'>+91 9764209752</a></li>
                </ul></div>
            </div>
            <hr className='hr' />
            <p className='copyright'><span className='c-spa'>&copy; </span> 2021-2023 All Rights Reserved</p>
        </div>
    )
}

export default FooterTab;