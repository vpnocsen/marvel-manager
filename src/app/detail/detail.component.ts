import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id;
  thumbnail: string;
  name: string;
  sumary: any = {};
  isLoading = true;
  comics = [];
  constructor(private activeRoute: ActivatedRoute, private api: ApiServices) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(({ id }) => {
      this.id = id;
      this.api.getCharacterDetail(id).subscribe(res => {
        this.sumary = res.results[0];
        this.thumbnail = this.sumary.thumbnail.path + '.' + this.sumary.thumbnail.extension;
      });
      this.api.getComics(this.id).subscribe(res => {
        this.comics = res.results.map(comic => {
          return {
            title: comic.title,
            desc: comic.description,
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            content: comic.textObjects.filter(obj => obj.type === 'issue_solicit_text').text,
          };
        });
        this.isLoading = false;
      });

    });
  }

}
