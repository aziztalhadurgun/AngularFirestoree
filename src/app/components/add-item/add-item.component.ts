import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item} from '../../models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item= {
    kitapAdi: '',
    aciklama: '',
    yazar: '',
    eklemeTarihi: '',
    imageUrl: '',
    like: 0 
  }
  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    
  }

  //ekleme yapmadan once doldurulacak yerlerin boş olup olmadığını kontrol ettiği metod
  onSubmit(){
    if(this.item.kitapAdi != '' && this.item.yazar != '')
    {
      this.itemService.addItem(this.item);
      this.item.kitapAdi = '';
      this.item.yazar = '';
      this.item.aciklama = '';
      this.item.eklemeTarihi = '';
      this.item.imageUrl = '';
    }
  }

}
