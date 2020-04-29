import { Loader } from '@graphql-toolkit/common';
import { ApolloEngineLoader } from '@graphql-toolkit/apollo-engine-loader';
import { CodeFileLoader } from '@graphql-toolkit/code-file-loader';
import { GitLoader } from '@graphql-toolkit/git-loader';
import { GithubLoader } from '@graphql-toolkit/github-loader';
import { PrismaLoader } from '@graphql-toolkit/prisma-loader';
import { UrlLoader } from '@graphql-toolkit/url-loader';

export const loaders: Loader[] = [
  new ApolloEngineLoader(),
  new CodeFileLoader(),
  new GitLoader(),
  new GithubLoader(),
  new PrismaLoader(),
  new UrlLoader(),
];
