'use strict';

const app = require('./routes');
const PORT = 8080;

app.listen(PORT, () => {
  console.log (`listening to port: ${PORT}`);
});
