import 'dotenv/config';

import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

import apiRoutes from './api/routes';

const app = express();
app.use(cors());
app.use(helmet());

app.use('/', express.static(path.join(__dirname, 'website')));
app.use('/api', apiRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
