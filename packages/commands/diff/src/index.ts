import { defineCommand } from '@test-graphql-cli/common';
import { loaders } from '@test-graphql-cli/loaders';
import diff from '@graphql-inspector/diff-command';
import { LoadersRegistry } from '@graphql-inspector/loaders';

export default defineCommand(() => {
  const loadersRegistry = new LoadersRegistry();

  loaders.forEach((loader) => loadersRegistry.register(loader));

  return diff({
    config: {
      loaders: [],
      commands: [],
    },
    loaders: loadersRegistry,
  });
});
