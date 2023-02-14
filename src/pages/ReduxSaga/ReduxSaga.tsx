import React, { useEffect, useRef, useCallback } from 'react';
import type { FC } from 'react';
import { Center, Button, Stack, Text } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'store';
import { tasksActions, tasksSelectors } from 'store/tasks';

import { TasksList } from 'components/TasksList';

const ReduxSaga: FC = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getTasks);
  const loading = useSelector(tasksSelectors.getLoading);

  const count = useRef<number>(0);

  const onClick = useCallback(() => {
    dispatch(tasksActions.tasksComplete());
  }, [dispatch]);

  useEffect(() => {
    dispatch(tasksActions.tasksReload());
  }, []);

  count.current = count.current + 1;

  const info = `Page render: ${count.current}`;

  return (
    <Center p={10}>
      <Stack>
        <TasksList
          name="Redux Saga"
          tasks={tasks}
          loading={loading}
        />
        <Button onClick={onClick}>Complete</Button>
        <Text>{info}</Text>
      </Stack>
    </Center>
  )
};

export {
  ReduxSaga,
}
