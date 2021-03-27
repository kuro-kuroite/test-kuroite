import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureTestUnit: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npx jest --ci --coverage --coverageThreshold='{"global":{"branches":100,"functions":100,"lines":100,"statements":100}'`
      )}
    </Text>
  </Box>
);

const TestUnit: VFC<Props> = () => {
  return <PureTestUnit />;
};

export default TestUnit;

export type PureProps = Props;

export type Props = Record<string, unknown>;
