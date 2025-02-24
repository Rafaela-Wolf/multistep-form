import { BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from "react-icons/bs";
import './ReviewForm.css';

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" required name="review" />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="neutral" required name="review" />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="satisfied" required name="review" />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="very_satisfied" required name="review" />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" required placeholder="Conte como foi a sua experiência com o produto?"></textarea>
      </div>
    </div>
  )
}

export default ReviewForm;