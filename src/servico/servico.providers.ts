/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Connection, Repository } from 'typeorm';
import { Servico } from './servico.entity';

export const servicoProviders = [
  {
    provide: 'SERVICO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Servico),
    inject: ['DATABASE_CONNECTION'],
  },
];