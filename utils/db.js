import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const sql = neon("postgresql://InterviewX_owner:2YFJqk9exwvV@ep-dark-sound-a5kp0959.us-east-2.aws.neon.tech/InterviewX?sslmode=require");
export const db = drizzle(sql, {schema});