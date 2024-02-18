import { useValue } from 'react-cosmos/client';

import { Button } from '@mantine/core';

export default () => {
  const [count, setCount] = useValue('count', { defaultValue: 0 as number });

  return (
    <Button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </Button>
  );
};
