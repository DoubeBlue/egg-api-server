"use strict";
const db = require("./db");

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1531275179696_4675";

  // add your config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: db.host,
      port: db.port,
      user: db.user,
      password: db.password,
      database: db.database
    },
    app: true,
    agent: false
  };

  return config;
};
