import yargs from 'yargs';
import globby from 'globby';
import { join } from 'path';
import { CommandFactory, useConfig } from '@test-graphql-cli/common';

export async function cli(): Promise<void> {
  const program = yargs
    .scriptName('graphql')
    .detectLocale(false)
    .epilog('Visit https://github.com/Urigo/graphql-cli for more information')
    .version();

  const commandPackageNames = await discoverCommands();
  const commandFactories = await Promise.all(commandPackageNames.map(loadCommand));

  commandFactories.forEach((cmd) => {
    program.command(
      cmd({
        useConfig,
      })
    );
  });

  program.demandCommand().recommendCommands().help().showHelpOnFail(false).argv;
}

async function discoverCommands() {
  const discoveredCommands = await globby('*', {
    cwd: join(process.cwd(), 'node_modules/@test-graphql-cli'),
    onlyDirectories: true,
    deep: 1,
    ignore: ['common'],
  });

  return discoveredCommands;
}

function loadCommand(name: string): CommandFactory {
  const mod = require(`@test-graphql-cli/${name}`);

  return mod.default || mod;
}
