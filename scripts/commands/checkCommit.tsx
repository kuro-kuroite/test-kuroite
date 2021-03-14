import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckCommit: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>{exitCommandSync(`npx commitlint -f HEAD`)}</Text>
  </Box>
);

const CheckCommit: VFC<Props> = () => {
  return <PureCheckCommit />;
};

export default CheckCommit;

export type PureProps = Props;

export type Props = Record<string, unknown>;
