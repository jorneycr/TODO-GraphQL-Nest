import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        { id: 1, description: "Piedra del Alma", done: false },
        { id: 2, description: "Piedra del Espacio", done: false },
        { id: 3, description: "Piedra del Poder", done: false },
        { id: 4, description: "Piedra del Mente", done: true },
    ]
}
