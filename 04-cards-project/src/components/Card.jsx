import { Bookmark } from 'lucide-react'

function Card(props) {
  return (
    <div className="card">
        <div className="top">
          <img src={props.logo} alt="Card Image" />
          <button>Save&nbsp;<Bookmark color='#b7b7b7c0' size={14}/></button>
        </div>
        <div className="center">
          <h3>{props.company}<span>{props.postedTime}</span></h3>
          <h2>{props.role}</h2>
          <div>
            <h5>{props.tag1}</h5>
            <h5>{props.tag2}</h5>
          </div>
        </div>
        <hr></hr>
        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card;
