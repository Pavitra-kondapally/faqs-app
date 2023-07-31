// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, showOrHideAnswer, isAnswerShown} = props
  const {questionText, answerText, id} = faqDetails
  const onShowHide = () => {
    showOrHideAnswer(id)
  }
  return (
    <li className="each-faq-container">
      <div className="question-container">
        <p className="question-style">{questionText}</p>
        {isAnswerShown ? (
          <button
            className="plus-minus-button"
            onClick={onShowHide}
            type="button"
          >
            -
          </button>
        ) : (
          <button
            className="plus-minus-button"
            onClick={onShowHide}
            type="button"
          >
            +
          </button>
        )}
      </div>
      {isAnswerShown ? (
        <div>
          <hr className="separator" />
          <p className="answer-style">{answerText}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItem
