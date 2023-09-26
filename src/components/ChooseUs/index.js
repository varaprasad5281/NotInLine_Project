import React, {useState} from "react"
import './index.css'

const openUrl = "https://res.cloudinary.com/gopi-enterprises/image/upload/v1695365736/arrow_drop_down_tnaboj.png"
const closeUrl = "https://res.cloudinary.com/gopi-enterprises/image/upload/v1695365736/close_s42lup.svg"

const ChooseUs = ()=>{
    const [dropDown,setDropDown] = useState({one:false,two:false,three:false,four:false})
    return(
        <div className='choose-bg-container'>
            <h1 className='top-headerss'>Why <span className='sp'>choose</span> us?</h1>
            <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290686/Vector_4_k6itq9.svg" alt='underimg' className='underlineimage' />
            <p className='para1'>Explore our range of tests! We ensure that you don't miss out on any chance to keep yourself healthy.</p>
            <div className='cards-doc-containse'>
                <div className='choose-card-container1'>
                    <div className='box box1'>
                        <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_16_n9boyg.svg' alt='logo' className='logo-choose' />
                        <h3 className='c-heading'>NABL Accredited Labs</h3>
                        <p className='para'>Get accurate and safe results from our NABL-certified lab partners.</p>
                    </div>
                    <div className='box box2'>
                    <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_13_pcqjdr.svg' alt='logo' className='logo-choose' />
                        <h3 className='c-heading'>Timely collections</h3>
                        <p className='para'>We collect samples timely to prevent treatment delays and ensure your continued well-being</p>
                    </div>
                </div>
                <div className='choose-card-container2'>
                    <div className='box box3'>
                    <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_14_su3l0r.png' alt='logo' className='logo-choose' />
                        <h3 className='c-heading'>Value experience</h3>
                        <p className='para'>Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.</p>
                    </div>
                    <div className='box box4'>
                    <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_15_u6yrpl.svg' alt='logo' className='logo-choose' />
                        <h3 className='c-heading'>Transparency</h3>
                        <p className='para'>Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.</p>
                    </div>
                </div>
                <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290682/expressive-young-woman-posing-studio-removebg-preview-transformed_1_k3qepu.png' alt='doctor' className='doc' />
            </div>


            <div className='cards-doc-containses'>
                    <div className={`${dropDown.one ? "box1":"boxs"}`}>
                    <div className="div"> <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_16_n9boyg.svg' alt='logo' className='logo-chooses' />
                        <h3 className='c-headings'>NABL Accredited Labs</h3>
                        <button type='button' className='opbtn' onClick={()=>setDropDown({...dropDown,one: !dropDown.one})} ><img src={dropDown.one ? closeUrl:openUrl} alt='closeopen' width="50px" height="50px"/></button></div>
                        {dropDown.one && <p className='para'>Get accurate and safe results from our NABL-certified lab partners.</p>}
                    </div>
                   

                    <div className={`${dropDown.two ? "box1":"boxs"}`}>
                   <div className="div"><img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_13_pcqjdr.svg' alt='logo' className='logo-chooses' />
                        <h3 className='c-headings'>Timely collections</h3>
                        <button type='button' className='opbtn' onClick={()=>setDropDown({...dropDown,two: !dropDown.two})} ><img src={dropDown.two ? closeUrl:openUrl} alt='closeopen' width="50px" height="50px" /></button></div> 
                        {dropDown.two && <p className='para'>We collect samples timely to prevent treatment delays and ensure your continued well-being</p>}
                    </div>
                    
                    

                    <div className={`${dropDown.three ? "box1":"boxs"}`}>
                    <div className="div"> <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_14_su3l0r.png' alt='logo' className='logo-chooses' />
                        <h3 className='c-headings'>Value experience</h3>
                        <button type='button' className='opbtn' onClick={()=>setDropDown({...dropDown,three: !dropDown.three})} ><img src={dropDown.three ? closeUrl:openUrl} alt='closeopen' width="50px" height="50px" /></button></div>
                        {dropDown.three &&  <p className='para'>Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.</p>}
                    </div>
                   


                    <div className={`${dropDown.four ? "box1":"boxs"}`}>
                    <div className="div">  <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_15_u6yrpl.svg' alt='logo' className='logo-chooses' />
                        <h3 className='c-headings'>Transparency</h3>   
                        <button type='button' className='opbtn' onClick={()=>setDropDown({...dropDown,four: !dropDown.four})} ><img src={dropDown.four ? closeUrl:openUrl} alt='closeopen' width="50px" height="50px" /></button></div>
                       {dropDown.four && <p className='para'>Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.</p>}
                    </div>

                    
                <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290682/expressive-young-woman-posing-studio-removebg-preview-transformed_1_k3qepu.png' alt='doctor' className='doc' />
            </div>
        </div>
    )
}

export default ChooseUs