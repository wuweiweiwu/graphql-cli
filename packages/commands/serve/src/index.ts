import { defineCommand } from '@test-graphql-cli/common';
import { loaders } from '@test-graphql-cli/loaders';
import serve from '@graphql-inspector/serve-command';
import { LoadersRegistry } from '@graphql-inspector/loaders';

export default defineCommand(() => {
  const loadersRegistry = new LoadersRegistry();

  loaders.forEach((loader) => loadersRegistry.register(loader));

  return serve({
    config: {
      loaders: [],
      commands: [],
    },
    loaders: loadersRegistry,
  });
});
