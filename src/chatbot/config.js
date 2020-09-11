import React from 'react'
import {createChatBotMessage} from 'react-chatbot-kit'
import Options from '../Options/Options'
import Quiz from '../Quiz/Quiz'
const config ={
    botName: 'AdewoleBot',
    initialMessages: [createChatBotMessage('Hello What do you want to learn',{
        widget: 'options'
    })],
    widgets:[
        {
            widgetName: 'options',
            widgetFunc: (props)=> <Options {...props} />
        },
        {
            widgetName: "javascriptQuiz",
            widgetFunc: (props) => <Quiz {...props} />,
            props:{
                questions:[
                   {
                    question: "What is closure?",
                    answer: "Closure is a way for a function to retain access to it's enclosing function scope after",
                    id: 1
                   },
                   {
                       question: "Explain prototypal inheritance",
                       answer: "Prototypal inheritance is a link between an object and an object store that holds share ",
                       id: 2
                   }
                ]
            }
        }
    ]
}
export default config;