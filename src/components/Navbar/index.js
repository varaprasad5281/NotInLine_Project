import React, {useState} from "react"
import './index.css'

const Navbar = ()=>{
    const [isTrue,setIsTrue] = useState(false)
    return(
        <nav className='nav-container'>
            <div className='res-img' >
                <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290684/NIL_logo.png"  alt="nillogo" className='img1' />
                <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290684/Screenshot_2023-07-25_165513-removebg-preview_1_e0ijay.png" alt="nilname" className='img2'/>
            </div>

           <button type='button' className='rbtn' onClick={()=>setIsTrue(!isTrue)} ><img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695346573/menu_dw59kg.svg'  alt='menu' className='menu'/></button> 
           {isTrue && <div className='response-nav'>
            <ul className='ul-containersss'>
                <li className='lis'><a href='###' className='a'>Home</a></li>
                <li className='lis'><a href='###' className='a'>Health Conditions</a></li>
                <li className='lis'><a href='###' className='li-lab a' >Lab Test</a></li>
                <li className='lis'><a href='###' className='a'>Medicines</a></li>
            </ul>
            <div className='btns-containers'>
                <button type='button' className='btn1' >For patients</button>
                <button type='button' className='btn2' >For hospitals</button>
            </div>
            <button type='button' className='play-btns'><img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290684/Rectangle_48_ogcmyq.png' alt='store' className='play-img' /> Play store</button>
            </div>}
            
            <ul className='ul-containerss res-div'>
                <li className='lis'><a href='###' className='a'>Home</a></li>
                <li className='lis'><a href='###' className='a'>Health Conditions</a></li>
                <li className='lis'><a href='###' className='li-lab a' >Lab Test</a></li>
                <li className='lis'><a href='###' className='a'>Medicines</a></li>
            </ul>
            <div className='btns-container res-div'>
                <button type='button' className='btn1' >For patients</button>
                <button type='button' className='btn2' >For hospitals</button>
            </div>
            <button type='button' className='play-btn res-div'><img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290684/Rectangle_48_ogcmyq.png' alt='store' className='play-img' /> Play store</button>
          
        </nav>
    )
}

export default Navbar