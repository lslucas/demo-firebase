const environments = {};

environments.development = {
  apiKey: "AIzaSyBLja8D_hl8rlNyTvFENhp881oaJV_LkYs",
  authDomain: "api-project-307902130548.firebaseapp.com",
  databaseURL: "https://api-project-307902130548.firebaseio.com",
  projectId: "api-project-307902130548",
  storageBucket: "",
  messagingSenderId: "307902130548"
};

const curEnv = typeof(process.env.ENV) == 'string' ? process.env.ENV.toLocaleLowerCase() : '';

const envToExport = typeof(environments[curEnv]) == 'object' ? environments[curEnv] : environments.development;

module.exports = envToExport;