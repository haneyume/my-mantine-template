import { Card, Stack, Text, Button } from '@mantine/core';

import { useGetPostsQuery } from '@/app-redux';

export const PostListSection = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  async function getFile() {
    // Open file picker and destructure the result the first handle
    // @ts-ignore
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();

    console.log(file);

    return file;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Stack>
      <Button onClick={getFile}>Open File</Button>
      {data?.map((post) => (
        <Card key={post.id} withBorder>
          <Stack>
            <Text>{post.content}</Text>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};
