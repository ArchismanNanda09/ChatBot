import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Todos from "./components/Todos/Todos";
const botName = "Crash";
const config = {
    botName: botName,
    initialMessages: [createChatBotMessage('Hello World', {widget: 'todos'})],
    customComponents:{
         botAvatar: (props)=><BotAvatar {...props}/>
         
    },
    customStyles:{
        botMessageBox:{
            backgroundColor: "#1974D2",
        },
        chatButton:{
            backgroundColor: "#5ccc9d",
        }
    },
    state:{
        todos:[]
    },
    widgets:[
        {
            widgetName: "todos",
            widgetFunc:(props)=><Todos {...props}/>,
            mapStateToProps: ["todos"],
        }
    ]
   
}

export default config;