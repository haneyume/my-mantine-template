import { Card, Stack, Title, Text } from '@mantine/core';

import { useGetPostsQuery } from '@/app-redux';

export const MessageListSection = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Stack>
      {data?.map((post) => (
        <Card key={post.id} withBorder>
          <Stack>
            <Title order={3}>{post.title}</Title>
            <Text>{post.body}</Text>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};
