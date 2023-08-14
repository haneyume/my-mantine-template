// @ts-ignore
import { Allotment } from 'allotment';

import { EditorSidebar, EditorContent } from '../sections';

export const CodeGenPage = () => {
  return (
    <Allotment>
      <Allotment.Pane preferredSize={250}>
        <EditorSidebar />
      </Allotment.Pane>

      <Allotment.Pane>
        <EditorContent />
      </Allotment.Pane>
    </Allotment>
  );
};
