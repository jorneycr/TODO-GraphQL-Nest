import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dtos/inputs/create-todo.input';
import { UpdateTodoInput } from './dtos/inputs/update-todo.input';
import { StatusArgs } from './dtos/args/status.args';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        { id: 1, description: "Piedra del Alma", done: false },
        { id: 2, description: "Piedra del Espacio", done: false },
        { id: 3, description: "Piedra del Poder", done: false },
        { id: 4, description: "Piedra del Mente", done: true },
    ]

    get totalTodos(){
        return  this.todos.length;
    }

    get completedTodos(){
        const completedTodos = this.todos.filter( todo => todo.done === true);
        return completedTodos.length;
    }

    get pendingTodos(){
        const pendingTodos = this.todos.filter( todo => todo.done === false);
        return pendingTodos.length;
    }

    findAll(statusArgs: StatusArgs): Todo[] {
        const { status } = statusArgs;
        if (status !== undefined) return this.todos.filter(todo => todo.done === status);

        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) throw new NotFoundException(`This todo doesn't exist => ${id}`);
        return todo;
    }

    createTodo(createTodoInput: CreateTodoInput): Todo {
        const todo = new Todo();
        todo.description = createTodoInput.description;
        todo.done = false;
        todo.id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
        this.todos.push(todo);
        return todo;
    }

    updateTodo(updateTodoInput: UpdateTodoInput): Todo {
        const { id, description, done } = updateTodoInput;
        const todoUpdate = this.findOne(id);

        if (description) todoUpdate.description = description;

        if (done !== undefined) todoUpdate.done = done;

        this.todos = this.todos.map(todo => todo.id === id ? todoUpdate : todo)

        return todoUpdate;
    }

    removeTodo(id: number): Boolean {
        const tdo = this.findOne(id);

        this.todos = this.todos.filter(todo => todo.id !== tdo.id);

        return true;
    }
}
