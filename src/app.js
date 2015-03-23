/**
 * Created by Shahzad on 3/24/2015.
 */

/*tutorial taken from http://www.htmlxprs.com/post/54/creating-a-super-simple-to
do-src-using-angular-2-tutorial*/

//imports modules
import {Component, Template, bootstrap,Foreach} from '../angular2/angular2';
import {TodoStore} from 'services/todoStoreService';

//creates a component
@Component({
    selector: 'todo-app',
    componentServices: [TodoStore]
})

//creates a template
@Template({
    url: 'src/templates/todo.view.html',
    directives: [Foreach]
})

class TodoApp {
    //create class property
    todoStore: TodoStore;

    //constructor for the class
    constructor( todoStore: TodoStore ) {
        this.todoStore = todoStore;
    }

    //adds a todoItem to todoStore
    add( $event, newtodo ) {
        if ( $event.which === 13 ) {
            this.todoStore.add( newtodo.value );
            newtodo.value = '';
        }
    }

    //toggle todoItem state
    toggleTodoState( todoItem ){
        todoItem.done = !todoItem.done;
    }
}

//initialize/bootstrap todoApp application.
bootstrap( TodoApp );
