/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */

import { Connection, Repository } from 'typeorm';
import { Token } from './token.entity';

export const tokenProviders = [
  {
    provide: 'TOKEN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Token),
    inject: ['DATABASE_CONNECTION'],
  },
];