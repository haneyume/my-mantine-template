// @ts-ignore
import { Allotment } from 'allotment';

import { ConversationListSection } from '../sections/Chat/ConversationListSection';
import { MessageListSection } from '../sections/Chat/MessageListSection';

export const ChatPage = () => {
  return (
    <Allotment>
      <Allotment.Pane preferredSize={250}>
        <ConversationListSection />
      </Allotment.Pane>

      <Allotment.Pane>
        <MessageListSection />
      </Allotment.Pane>
    </Allotment>
  );
};
