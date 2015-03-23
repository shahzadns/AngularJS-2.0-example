/**
 * Created by Shahzad on 3/24/2015.
 */

//creates and exports a class TodoStore
export class TodoStore {
    //constructor fo the class
    constructor() {
        this.todoList = [];
    }

    //adds an item to todoList
    add( item ) {
        this.todoList.unshift({
            text: item,
            done: false
        });
    }
}