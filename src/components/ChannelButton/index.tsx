import React from 'react';
import { Container, HashTagIcon, InviteIcon, SettingsIcon, Icons } from './styles';

export interface ChannelButtonProps {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<ChannelButtonProps> = ({channelName, selected}) => {
  return (
    <Container className={selected ? 'active': '' }>
      <div>
        <HashTagIcon />
        <span>{channelName}</span>
      </div>
      

      <Icons>
        <InviteIcon />
        <SettingsIcon />
      </Icons>


    </Container>
  );
}

export default ChannelButton;