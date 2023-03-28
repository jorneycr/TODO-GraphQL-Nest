import { Float, Query, Resolver, Int } from '@nestjs/graphql';

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

    @Query(()=> Int, {name: 'randomFromZeroTo'})
    getRandomFromZeroTo(): number {
        return Math.floor(Math.random() * 10);
    }
}
