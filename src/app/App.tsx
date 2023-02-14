import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Box, HStack, Text } from '@chakra-ui/react';

import { router } from 'router';
import { uiRoutes } from 'constants/ui.routes';

const App = () => {
  return (
    <Box position="relative" top={0} bottom={0} left={0} right={0}>
      <HStack px={8} py={6} spacing="32px">
        <a href={uiRoutes.rtkEffects}>
          <Text color="blue.500">RTK Query (effects)</Text>
        </a>
        <a href={uiRoutes.rtkAsync}>
          <Text color="blue.500">RTK Query (async)</Text>
        </a>
        <a href={uiRoutes.reduxSaga}>
          <Text color="blue.500">Redux-Saga</Text>
        </a>
      </HStack>
      <RouterProvider router={router} />
    </Box>
  );
}

export {
  App,
};
