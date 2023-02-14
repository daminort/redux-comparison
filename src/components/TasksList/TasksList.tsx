import React from 'react';
import type { FC } from 'react';
import { Card, CardHeader, CardBody, Text, UnorderedList, ListItem } from '@chakra-ui/react';

import type { TTask } from 'interfaces/tasks.interface';

type TProps = {
  name: string;
  tasks: TTask[];
  loading: boolean;
}

const TasksList: FC<TProps> = ({ tasks, name, loading }) => {

  const opacity = loading ? 0.5 : 1;

  return (
    <Card w="200px">
      <CardHeader>
        <Text as="h2">{name}</Text>
      </CardHeader>
      <CardBody opacity={opacity}>
        <UnorderedList>
          {tasks.map(task => (
            <ListItem key={task.id} px={3} py={2}>
              <Text textDecoration={task.done ? 'line-through' : 'none'}>{task.name}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </CardBody>
    </Card>
  )
};

export {
  TasksList,
}
