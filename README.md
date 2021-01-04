[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/mikenikles/your-analytics)

# your-analytics

## Architecture

Please refer to [#1](../../issues/1).

## Development

Follow the steps outlined in the chapters below, then click the Gitpod link above.
This will open your development environment, install dependencies and start all necessary services.
The web application is available on port 3000. Use the "Open Ports" tab next to the terminal in Gitpod
to open a new browser tab on port 3000.

### FaunaDB

1. Create a `your-analytics-dev` database at https://fauna.com.
1. In your Gitpod.io account, set the following environment variables:
   - `YA_FAUNADB_ADMIN_SECRET`: [Follow instructions here](./services/admin-api/README.md)
   - `YA_FAUNADB_SERVER_SECRET`: [Follow instructions here](./services/admin-api/README.md)

### Magic Link

1. Create an account at https://magic.link.
1. In your Gitpod.io account, set the following environment variable:
   - `YA_MAGIC_SECRET_KEY`: Your Magic **TEST**\_SECRET_KEY value

## Tests

All test results are publicly available on the [Cypress Dashboard](https://dashboard.cypress.io/projects/gynhxr/runs).

WIP: Trigger Vercel build: 4
