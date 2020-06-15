import { observable, action } from 'mobx'
import { Item } from './Item'
import { name } from 'file-loader';


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;

    checkItem = () => {
        // your code here
    }
    @action addItem = (name) => {
        this.list.unshift(new Item(name))
    }

    @action deleteItem = (nameToDelete) => {
        for(let i in this.list){
            if(this.list[i].name === nameToDelete){
                this.list.splice(i, 1)
                break
            }
        }
    } 
    
    @action editItem = (itemName, newLocation) => {
        this.list.find(i => i.name === itemName).location = newLocation
    }
}

