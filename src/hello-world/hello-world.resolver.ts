import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( ()=> String )
    HelloWorld(): string{
        return "Hola mundo";
    }
}
