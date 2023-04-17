import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTodoInput {

    @Field(() => String, { description: 'Need to be done' })
    description: string;
}