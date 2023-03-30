import { Float, Query, Resolver, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String, { description: 'Hola mundo retorna', name: 'hello' })
    HelloWorld(): string {
        return "Hola mundo";
    }

    @Query(() => Float, { name: 'randomNUmber' })
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, { name: 'randomFromZeroTo', description: 'From zero to (default 6)' })
    getRandomFromZeroTo(
        @Args('to', { nullable: true, type: () => Int }) to: number = 6
    ): number {
        return Math.floor(Math.random() * to);
    }
}
