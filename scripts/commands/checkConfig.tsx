import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckConfig: VFC<PureProps> = ({ configArgs, ymlArgs }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npx eslint ${configArgs} --ignore-path ./.eslintignore ; EXIT_ESLINT=$? ; npx prettier ${ymlArgs} --ignore-path ./.prettierignote --check ; EXIT_PRETTIER=$? ; npx --package renovate -c 'renovate-config-validator' ; EXIT_RENOVATE=$?; exit $(( $EXIT_ESLINT+$EXIT_PRETTIER+$EXIT_RENOVATE ))`
      )}
    </Text>
  </Box>
);

const CheckConfig: VFC<Props> = () => {
  const configJsonFiles = [
    '.*.json',
    '*.json',
    '.github/*.json',
    '.storybook/tsconfig.json',
    '.vscode/*.json',
    'cypress/tsconfig.json',
    'src/tsconfig.json',
    'scripts/package.json',
    'scripts/tsconfig.json',
  ];
  const configTsFiles = [
    '.*.js',
    '*.config.js',
    '*.js',
    'config/**/*.ts',
    '.jest/**/*.js',
    '.storybook/.*.js',
    '.storybook/*.ts',
    '.storybook/*.js',
    'cypress/.*.js',
    'cypress/plugins/*.ts',
    'cypress/support/*.ts',
    'hygen/**/*.ts',
    'hygen/**/*.js',
    'scripts/commands/**/*.tsx',
    'scripts/src/**/*.ts',
    'scripts/src/**/*.js',
  ];
  const configFiles = [...configJsonFiles, ...configTsFiles];
  const configYmlFiles = ['.github/**/*.yml'];

  return (
    <PureCheckConfig
      configArgs={configFiles.join(' ')}
      ymlArgs={configYmlFiles.join(' ')}
    />
  );
};

export default CheckConfig;

export type PureProps = {
  configArgs: string;
  ymlArgs: string;
};

export type Props = Record<string, unknown>;
