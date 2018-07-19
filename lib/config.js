const environments = {};

// all this are my keys, get yours on https://console.firebase.google.com/u/0/
// you can use those for simple testing. That's safe because they are linked
// on my google account and I can change the permissions any time.
// also this is a demo project. Add new stuff on it, remove it. Doesn't matter :)
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
