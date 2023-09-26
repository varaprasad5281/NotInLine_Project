

import './index.css'

const cardData = [
    {
        hc:"Basic Full Body Checkup",
        rating: "4.3",
    review:75,
    test:53,
    price:"10,000",
    discountPrice:"8,490"},
    {hc:"Advance Full Body Checkup",
        rating: "4.7",
        review:100,
        test:70,
        price:"12,000",
        discountPrice:"10,000"},
        { hc:"Liver Function Test (LFT)",
            rating: "4.3",
            review:43,
            test:89,
            price:"13,299",
            discountPrice:"11,299"}
]

const BookingTab = ()=>{
    return(
        <div className='booking-cords-bg-container'>
            <h1 className='top-heads'>Top <span className='sp'>Packages</span></h1>
            <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290686/Vector_4_k6itq9.svg" alt='underimg' className='underlineimages' />
            <p className='paragra'>Explore our range of tests! We ensure that you don't miss out on any chance to keep yourself healthy.</p>
            <div className='booking-containers'>
                { cardData.map((obj,index)=>{
                    const {hc,rating,review,test,price,discountPrice} = obj
                return(<div key={index} className='booking-card'>
                    <h3 className='h3-heading'>{hc}</h3>
                    <p className='para-rate'><span className='para-spa'>{rating}</span> <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290682/grade_y2ck3m.svg' alt='start' className='star-img' /> ({review} Reviews)</p>
                    <p className='para-spa'>Number of tests - {test}</p>
                    <p className='para-rate'>MRP: <span className='spa'>&#8377;{price}</span>  &#8377;{discountPrice}</p>
                    <button type='button' className='card-btns' >Book now</button>
                </div>)})}
                <div className='round-arrow'>
                    <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290682/Arrow_1_kftfss.svg' alt='arrow' />
                </div>
            </div>
            <div className='seel'><a href='###' className='see'>See All</a></div>
        </div>
    )
}

export default BookingTab;