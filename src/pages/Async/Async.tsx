import React, { useRef, useCallback, useState } from 'react';
import type { FC } from 'react';
import { Center, Button, Stack, Text, Box } from '@chakra-ui/react';

import { useListQuery, useCompleteMutation } from 'store/tasksAPI';

import { TasksList } from 'components/TasksList';

type TStatus = 'initial' | 'success' | 'error';

const Async: FC = () => {

  const { data: tasks, isLoading: getLoading } = useListQuery();
  const [complete, { isLoading: postLoading }] = useCompleteMutation();

  const [status, setStatus] = useState<TStatus>('initial');

  const count = useRef<number>(0);

  const onClick = useCallback(async () => {
    const result = await complete();
    // @ts-ignore
    if (Boolean(result?.error)) {
      setStatus('error');
    }
    // @ts-ignore
    if (Boolean(result?.data)) {
      setStatus('success');
    }
  }, [complete]);

  count.current = count.current + 1;

  const info = `Page render: ${count.current}`;
  const loading = getLoading || postLoading;

  const showSuccess = status === 'success';
  const showError = status === 'error';

  return (
    <Center p={10}>
      <Stack>
        <TasksList
          name="RTK Query (async)"
          tasks={tasks || []}
          loading={loading}
        />
        <Button onClick={onClick}>Complete</Button>
        <Text>{info}</Text>
        <Box py={2}>
          {showSuccess && <Text color="green.500">Success</Text>}
          {showError && <Text color="red.500">Error</Text>}
        </Box>
      </Stack>
    </Center>
  )
};

export {
  Async,
}
