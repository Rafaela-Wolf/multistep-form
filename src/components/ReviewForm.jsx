import { BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from "react-icons/bs";
import './ReviewForm.css';

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input 
            type="radio" 
            value="unsatisfied" 
            required 
            name="review"
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input 
            type="radio" 
            value="neutral" 
            required 
            name="review"
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input 
            type="radio" 
            value="satisfied" 
            required 
            name="review"
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input 
            type="radio" 
            value="very_satisfied" 
            required 
            name="review"
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea 
          name="comment" 
          id="comment" 
          required 
          placeholder="Conte como foi a sua experiência com o produto?"
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}>
        </textarea>
      </div>
    </div>
  )
}

export default ReviewForm;