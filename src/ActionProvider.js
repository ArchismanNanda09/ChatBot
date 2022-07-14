class ActionProvider{
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage=createChatBotMessage;
        this.setStateFunc=setStateFunc;
    }

    handler=(number)=>{
        const message = new Map();
        message.set('1',this.createChatBotMessage("Hello i haven't self actualize yet, my deepest apologies"))
        message.set('2',this.createChatBotMessage("Thank You!"))
        message.set('3',this.createChatBotMessage("I couldn't understand that"))
        
        this.setChatbotMessage(message.get(number))
        
    }
    setChatbotMessage=(message)=>{
        this.setStateFunc(state=>({...state, messages: [...state.messages, message]}))
    }
}

export default ActionProvider;