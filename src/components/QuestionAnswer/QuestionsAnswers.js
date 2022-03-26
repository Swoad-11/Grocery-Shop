import React from 'react';
import './QuestionsAnswers.css'

const QuestionsAnswers = () => {
    return (
        <div className='que-ans'>
            <div className='ques-1'>
                <h3>How does React work?</h3><br/>
                <p><strong>Answer:</strong> React is a library that allows to write JavaScript components. It uses a syntax similar to XML, and the markup of the components is a mix between HTML and XML, which is known as JSX.<br/>
                
                It uses a technology called the <strong>Virtual DOM</strong> to manage updates. Virtual DOM is just another way of saying a big object with all the components rendered on the page and their properties. Whenever one of them changes, React knows what to do.<br/>
                
                For event handling, React registers a global event handler and whenever events come through that listener, it takes on the responsibility to propagate the proper events and trigger the right handlers within components further down the chain.</p>
            </div>
            <div className='ques-2'>
                <h3>Comparison between Props and State.</h3><br/>
                <p><strong>Answer:</strong> In React 'State' are just like the local type of variable, Every component has it's own state and only can be use within the component.<br/>
                
                Similarly "Props' are just like the passing parameters, every component get props values from it's parent component or from where it calling. Props are read only and immutable.</p>
            </div>
        </div>
    );
};

export default QuestionsAnswers;