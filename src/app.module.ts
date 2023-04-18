import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // debug: false,
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault
      ],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
