const fs = require('fs');
const each = require('lodash.each');

const envVariables = require('../config/.env.sample');

const createENVFile = (directory, variables) => {
  each(variables, (variable) => {
    fs.appendFileSync(`./${directory}/.env`, variable + '\n');
  })
}

const buildEnv = () => {
  each(envVariables, (value, key) => {
    fs.writeFileSync(`./${key}/.env`, '')
    createENVFile(key, value);
  });
}

buildEnv();
