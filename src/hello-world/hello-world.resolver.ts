import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( ()=> String, {description: 'Hola mundo retorna', name: 'hello'} )
    HelloWorld(): string{
        return "Hola mundo";
    }

    @Query( ()=> Float, {name: 'randomNUmber'})
    getRandomNumber(): number {
        return Math.random() * 100;
    }
}
