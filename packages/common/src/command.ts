import { CommandModule } from 'yargs';
import { loadConfig, GraphQLConfig } from 'graphql-config';
import { LoadConfigOptions } from './types';

export type CommandFactory<T = {}, U = {}> = (api: {
  useConfig: (options?: LoadConfigOptions) => Promise<GraphQLConfig>;
}) => CommandModule<T, U>;

export function defineCommand<T = {}, U = {}>(factory: CommandFactory<T, U>) {
  return factory;
}

export function useConfig(options: LoadConfigOptions = {}) {
  return loadConfig({
    rootDir: process.cwd(),
    throwOnEmpty: true,
    throwOnMissing: true,
    ...options,
  });
}
