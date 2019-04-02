import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { ApiServices } from '../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  ELEMENT_DATA: any[] = [
    { description: 1, name: 'Hydrogen', image: 1.0079, symbol: 'H' },
    { description: 2, name: 'Helium', image: 4.0026, symbol: 'He' },
    { description: 3, name: 'Lithium', image: 6.941, symbol: 'Li' },
    { description: 4, name: 'Beryllium', image: 9.0122, symbol: 'Be' },
    { description: 5, name: 'Boron', image: 10.811, symbol: 'B' },
    { description: 6, name: 'Carbon', image: 12.0107, symbol: 'C' },
    { description: 7, name: 'Nitrogen', image: 14.0067, symbol: 'N' },
    { description: 8, name: 'Oxygen', image: 15.9994, symbol: 'O' },
    { description: 9, name: 'Fluorine', image: 18.9984, symbol: 'F' },
    { description: 10, name: 'Neon', image: 20.1797, symbol: 'Ne' },
  ];
  displayedColumns: string[] = ['name', 'description', 'image'];
  dataSource = [];
  total = 0;
  isLoading = false;
  constructor(private api: ApiServices) { }

  ngOnInit() {
    this.getData(0);
  }

  getMoreData(page: PageEvent) {
    this.getData(page.pageIndex);
  }

  private getData(offset) {
    this.isLoading = true;
    this.api.getCharacters(offset).subscribe(data => {
      console.log(data);
      this.total = data.total;
      this.dataSource = data.results.map(item => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          image: `${item.thumbnail.path}.${item.thumbnail.extension}`
        };
      });
      this.isLoading = false;
    }, error => {
      alert(error);
      this.isLoading = false;
    });
  }
}
