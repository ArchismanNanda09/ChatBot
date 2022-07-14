class MessageParser{
    
    constructor(actionProvider, state){
        this.actionProvider=actionProvider;
        this.state=state;
    }
    parse(message){
       
        var reg2 = /it+s o[k]ay/;
        const lowercase = message.toLowerCase();
        console.log(this.state)
       if(lowercase.includes("hello crash") ) {
           this.actionProvider.handler('1')
       }
     
       if((lowercase.match(reg2))){
        this.actionProvider.handler('2')

       }
    }
}

export default MessageParser;