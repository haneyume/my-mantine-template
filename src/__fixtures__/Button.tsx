import { useValue } from 'react-cosmos/client';

export default () => {
  const [count, _setCount] = useValue('count', { defaultValue: 0 });

  return <div>{count}</div>;
};
