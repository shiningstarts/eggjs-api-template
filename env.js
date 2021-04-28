'use strict';

const dotenv = require('dotenv-safe');

const userEnvFile = `${__dirname}/.env`;
const globalEnvFile = `${__dirname}/.env.example`;

dotenv.load({
  allowEmptyValues: true,
  sample: globalEnvFile,
  path: userEnvFile,
});
