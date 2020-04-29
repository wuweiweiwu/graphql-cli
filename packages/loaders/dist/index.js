"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_engine_loader_1 = require("@graphql-toolkit/apollo-engine-loader");
const code_file_loader_1 = require("@graphql-toolkit/code-file-loader");
const git_loader_1 = require("@graphql-toolkit/git-loader");
const github_loader_1 = require("@graphql-toolkit/github-loader");
const prisma_loader_1 = require("@graphql-toolkit/prisma-loader");
const url_loader_1 = require("@graphql-toolkit/url-loader");
exports.loaders = [
    new apollo_engine_loader_1.ApolloEngineLoader(),
    new code_file_loader_1.CodeFileLoader(),
    new git_loader_1.GitLoader(),
    new github_loader_1.GithubLoader(),
    new prisma_loader_1.PrismaLoader(),
    new url_loader_1.UrlLoader(),
];
//# sourceMappingURL=index.js.map