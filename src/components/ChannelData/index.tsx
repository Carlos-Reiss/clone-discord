import React,{ useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=>{
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }

  },[messagesRef])

  return (
    <Container>

      <Messages ref={messagesRef}>

      <ChannelMessage 
        key={0}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />
      
      <ChannelMessage 
        key={0}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />
      
      <ChannelMessage 
        key={0}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />
      <ChannelMessage 
        key={0}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />

      <ChannelMessage 
        key={1}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />

      <ChannelMessage 
        key={2}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />

      <ChannelMessage 
        key={3}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />

      <ChannelMessage 
        key={4}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />

      <ChannelMessage 
        key={5}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />

      <ChannelMessage 
        key={6}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />
      
      <ChannelMessage 
        key={7}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />

      <ChannelMessage 
        key={8}
        author="fulano" 
        date="10/06/2020"
        content="isso é uma mensagem" 
        />

        <ChannelMessage 
        key={9}
        author="Carlos Reis" 
        date="10/06/2020"
        content="Hoje é meu aniversário" 
        />

        <ChannelMessage 
        key={10}
        author="Diego Fernandes" 
        date="10/06/2020"
        content={
          <>
            <Mention>Carlos Reis</Mention>, Parabéns cara!
          </>
        }
        hasMentions
        isBot
        />

      </Messages>
      
      <InputWrapper >
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </ InputWrapper>

    </Container>
  );
}

export default ChannelData;