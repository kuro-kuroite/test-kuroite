import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckMd: VFC<PureProps> = ({ mdArgs }) => (
  <Box flexDirection="column">
    <Text>{exitCommandSync(`npx textlint ${mdArgs}`)}</Text>
  </Box>
);

const CheckMd: VFC<Props> = () => {
  const mdFiles = [
    'README.md',
    '.github/**/*.md',
    'docs/**/*.md',
    'content/**/*.md',
  ];

  return <PureCheckMd mdArgs={mdFiles.join(' ')} />;
};

export default CheckMd;

export type PureProps = {
  mdArgs: string;
};

export type Props = Record<string, unknown>;
