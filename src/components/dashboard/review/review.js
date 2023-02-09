import './review.css';


const ReviewCard = (props) => {
  return (
    <div className="review_card">
      <div className="review_card_img"><img src={props.img} /></div>
      <div className="review_card_info">
        <p>{props.review}</p>
        {props.by? <span>{props.by}</span> : null}
        {props.link? <a>View CV</a> : null}
      </div>
    </div>
  )
}

export default ReviewCard;
