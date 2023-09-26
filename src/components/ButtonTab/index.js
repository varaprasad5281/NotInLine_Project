
import "./index.css"

const cardsList = [
    {count:"5+",content:"Labs"},
    {count:"100+",content:"Collection centers"},
    {count:"1000+",content:"Monthly tests"},
    {count:"2200+",content:"Test menu"},
    {count:"5+",content:"Cities present in"}
    ]

const ButtonTab = ()=>{
    return(
        <div className="btn-cards-container">
            <h1 className="heading-btn">We keep <span className="sp">expanding</span>!</h1>
            <img src="https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290686/Vector_4_k6itq9.svg" alt="underimg" className="underline-image"/>
            <div className="cards-container">
                {cardsList.map((ele,index)=>{
                    const {count,content} = ele
                    return(
                        <div key={index} className="cards">
                            <h3 className="h3">{count}</h3>
                            <p className="p">{content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default ButtonTab