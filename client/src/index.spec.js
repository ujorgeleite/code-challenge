import 'bootstrap/dist/js/bootstrap';

const componentsContext = require.context('./', true, /^(?=.*?\b\.js\b)((?!\.spec\.js).)*$/);
componentsContext.keys().forEach(componentsContext);

const testsContext = require.context('./', true, /(.spec.js)/);
testsContext.keys().forEach(testsContext);