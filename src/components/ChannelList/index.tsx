import React,{ useState } from 'react';
import ChannelButton from "../ChannelButton";
import { 
Container,
Category,
AddCategoryIcon, 
} from './styles';

const ChannelList: React.FC = () => {
  const [checkout,setCheckout] = useState(Boolean);

  return (
    <Container>
     <Category>
       <span>Canais de Texto</span>
       <AddCategoryIcon />
     </Category>

    <ChannelButton channelName="chat-livre" />
    <ChannelButton channelName="trabalho" />
    <ChannelButton channelName="react-native" />
    <ChannelButton channelName="nodejs" />
    <ChannelButton channelName="reactjs" />

    </Container>
  );
}

export default ChannelList;