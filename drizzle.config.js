/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://InterviewX_owner:2YFJqk9exwvV@ep-dark-sound-a5kp0959.us-east-2.aws.neon.tech/InterviewX?sslmode=require",
    }
  };