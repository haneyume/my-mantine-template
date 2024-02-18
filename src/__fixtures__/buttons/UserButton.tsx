import { useValue } from 'react-cosmos/client';

import { UserButton } from '@/components';

export default () => {
  const [name, _setName] = useValue('name', {
    defaultValue: 'test-user' as string,
  });
  const [email, _setEmail] = useValue('email', {
    defaultValue: 'test@test.com' as string,
  });

  return <UserButton name={name} email={email} />;
};
