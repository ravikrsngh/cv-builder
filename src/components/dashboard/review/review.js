import './review.css';


const ReviewCard = (props) => {
  return (
    <div className="review_card">
      <div className="review_card_img"><img src={props.img} /></div>
      <div className="review_card_info">
        <p>{props.review}</p>
        <span>{props.by}</span>
      </div>
    </div>
  )
}

export default ReviewCard;
