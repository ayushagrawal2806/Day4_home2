import './card.css'
import { IoChatbox , IoHeartSharp , IoShareSocialSharp} from "react-icons/io5";
let Card = (props) =>  {
    let obj = {...props};
    return (
        <div className="card">

            <div className="content">
                <div className="headings">

                    <div className="image">
                        <img src= {obj.smallBanner} alt="banner" />
                    </div>

                    <div className="heading">
                        <div className="name-year-actor">
                            <h2>{obj.name}</h2>
                            <p>{obj.yearDirector}</p>
                        </div>
                        <div className="duration-type">
                            <p className='duration'>{obj.duration}</p>
                            <p className='type'>{obj.genre}</p>
                        </div>
                    </div>

                </div>

                <p className='description'>{obj.summary}</p>

                <div className="links">
                <IoShareSocialSharp />
                <IoHeartSharp />
                <IoChatbox />
                </div>

            </div>

            <div className="side-image">
                <img src= {obj.mainBanner} alt="" />
            </div>

        </div>
    )
}

export default Card