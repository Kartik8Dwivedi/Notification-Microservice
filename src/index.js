const express = require("express");
const bodyParser = require("body-parser");
const { setUpJobs } = require("./utils/job");

const { PORT } = require("./config/serverConfig");
const { sendEmail } = require("./services/email-service");
const apiRoutes = require('./routes/index')

const startServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    setUpJobs();
  });
};

startServer();

// sendEmail(
//     "support@admin.com",
//     "mailing.service.dev.kartik@gmail.com",
//     "test email",
//     "linking this ?"
// );

// cron for reminder service
// cron.schedule('*/1 * * * *', () => {
//     console.log('running a task every minute');
// });
