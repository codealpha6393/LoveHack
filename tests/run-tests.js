const suites = [
  {
    name: 'state',
    run: async () => (await import('./state.test.js')).runStateTests(),
  },
  {
    name: 'routes',
    run: async () => (await import('./routes.test.js')).runRouteTests(),
  },
];

let failed = false;

for (const suite of suites) {
  try {
    await suite.run();
    console.log(`PASS ${suite.name}`);
  } catch (error) {
    failed = true;
    console.error(`FAIL ${suite.name}`);
    console.error(error.stack || error.message || String(error));
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log('PASS all tests');
}
