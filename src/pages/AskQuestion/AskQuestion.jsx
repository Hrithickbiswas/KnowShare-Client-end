import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import { askQuestion } from '../../actions/question'

const AskQuestion = () => {

    const [ questionTitle, setQuestionTitle ] = useState('')
    const [ questionBody, setQuestionBody ] = useState('')
    const [ questionTags, setQuestionTags ] = useState('')
    
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();

            if (!User) {
            alert('Please log in or sign up to post your question for review!');
            navigate('/Auth');
            return;
            }

            dispatch(
            askQuestion({
                questionTitle,
                questionBody,
                questionTags,
                userPosted: User.result.name,
                userId: User.result._id,
            })
            );

            navigate('/');

            setTimeout(() => {
                alert('Alert! You have used your free post-question limit for the day! Upgrade to post unlimited questions!');
                window.location.href = 'https://stackoverflowpayment.netlify.app/';
            }, 1000); // Change the delay time as needed
        };

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }

    return (
        <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a public question</h1>

                <form onSubmit={handleSubmit}>

                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you’re asking a question to another person.</p>
                            <input type="text" id="ask-ques-title" onChange={(e) => {setQuestionTitle(e.target.value)}} maxlength="300" placeholder='e.g. Is there an R function for finding the index of an element in a vector?' data-min-length="15" data-max-length="150" />
                        </label>

                        <label htmlFor="ask-ques-problem">
                        <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="text" id="ask-ques-problem" onChange={(e) => {setQuestionBody(e.target.value)}} onKeyDown={handleEnter} cols="30" rows="10"></textarea>
                        </label>

                        <label htmlFor="ask-ques-Tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                            <input type="text" id="ask-ques-Tags" onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} placeholder='e.g. (angularjs mongodb regex)'/>
                        </label>
                    </div>
                    <input type="submit" value='Review your question' className='review-btn'/>
                
                </form>
            </div>

        </div>
    )
}

export default AskQuestion