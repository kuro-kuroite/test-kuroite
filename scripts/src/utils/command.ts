import {
  ChildProcess,
  spawn as _spawn,
  spawnSync as _spawnSync,
} from 'child_process';

export function command(_command: string): ChildProcess {
  return _spawn(_command, [], {
    shell: true,
    stdio: [process.stdin, process.stdout, process.stderr, 'ipc'],
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function commandSync(_command: string) {
  return _spawnSync(_command, [], {
    shell: true,
    stdio: ['inherit', 'inherit', 'inherit'],
  });
}

export function exitCommandSync(_command: string): string {
  return process.exit(commandSync(_command).status ?? 0);
}
