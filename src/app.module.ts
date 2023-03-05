import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWorldModule } from './hello-world/hello-world.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // debug: false,
      // playground: false
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    HelloWorldModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
