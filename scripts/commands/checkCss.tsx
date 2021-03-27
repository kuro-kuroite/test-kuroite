import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckCss: VFC<PureProps> = ({ cssArgs }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npx stylelint ${cssArgs} --ignore-path ./.stylelintignore`
      )}
    </Text>
  </Box>
);

const CheckCss: VFC<Props> = () => {
  const cssFiles = ['src/**/*.css'];

  return <PureCheckCss cssArgs={cssFiles.join(' ')} />;
};

export default CheckCss;

export type PureProps = {
  cssArgs: string;
};

export type Props = Record<string, unknown>;
