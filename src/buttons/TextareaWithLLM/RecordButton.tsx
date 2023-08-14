import { useContext, useId } from 'react';

import { Button } from '@mantine/core';

import { RecordContext } from '../../contexts';

export const RecordButton = ({
  onCallback,
}: {
  onCallback: (text: string) => void;
}) => {
  const id = useId();
  const recordCtx = useContext(RecordContext);

  if (recordCtx.recordingId === id) {
    return (
      <Button variant="light" size="xs" onClick={() => recordCtx.onStop()}>
        Stop
      </Button>
    );
  }

  return (
    <Button
      variant="light"
      size="xs"
      onClick={() => recordCtx.onRecord(id, onCallback)}
      disabled={recordCtx.recordingId !== ''}
    >
      Record
    </Button>
  );
};
