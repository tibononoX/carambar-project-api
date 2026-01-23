require("dotenv").config();
const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection failed:", err));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });
