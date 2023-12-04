import 'dotenv/config';
import * as mongoose from 'mongoose';

export const MONGODB_CONNECTION = 'MONGODB_CONNECTION';
export const databaseProviders = [
  {
    provide: MONGODB_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGODB_URL),
  },
];
