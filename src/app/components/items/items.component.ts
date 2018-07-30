import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) { }

  //kitapların listelendiği yer 
  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      //console.log(items);
    });
  }

  deleteItem(event, item){
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item){
    this.editState = true;
    this.itemToEdit = item;
    //this.itemService.editItem(item);
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState();
  }
   

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
}
