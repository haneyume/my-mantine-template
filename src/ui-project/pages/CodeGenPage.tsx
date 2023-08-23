// @ts-ignore
import { Allotment } from 'allotment';

import { CodeGenSidebar, CodeGenContent } from '../sections';

export const CodeGenPage = () => {
  return (
    <Allotment>
      <Allotment.Pane preferredSize={250}>
        <CodeGenSidebar />
      </Allotment.Pane>

      <Allotment.Pane>
        <CodeGenContent />
      </Allotment.Pane>
    </Allotment>
  );
};
