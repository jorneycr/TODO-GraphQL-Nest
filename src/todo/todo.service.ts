import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dtos/inputs/create-todo.input';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        { id: 1, description: "Piedra del Alma", done: false },
        { id: 2, description: "Piedra del Espacio", done: false },
        { id: 3, description: "Piedra del Poder", done: false },
        { id: 4, description: "Piedra del Mente", done: true },
    ]

    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo{
        const todo = this.todos.find( todo => todo.id === id);
        if(!todo) throw new NotFoundException(`This todo doesn't exist => ${id}`);
        return todo;
    }

    createTodo( createTodoInput: CreateTodoInput): Todo{
        const todo = new Todo();
        todo.description = createTodoInput.description;
        todo.done = false;
        todo.id = 5;
        return todo;
    }
}
