import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Album } from './../../album';

import { DataService } from './../../services/data-service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})

export class AlbumListComponent implements OnInit {

  private albums: any = []; 
  private term: any;
  private myAlbums: Album[] = [];
  private items: MenuItem[];
  private activeItem: MenuItem;
  private active: string = this.dataService.SEARCH;
  private search = true; // selected search(true) or playlist(false) tab

  title1: string = this.dataService.COLUMN_TITLE1;
  title2: string = this.dataService.COLUMN_TITLE2;

  constructor(
    private dataService: DataService
  ) { 
  }

  ngOnInit() {
    this.items = [
      { label: this.dataService.SEARCH, icon: 'fa fa-fw fa-search', command: (onclick)=>{ this.search = true; this.refreshView(); } },
      { label: this.dataService.MY_ALBUMS, icon: 'fa fa-fw fa-music', command: (onclick)=>{ this.search = false; this.refreshView(); } }
    ];
  }

  searchAlbums(term: string) {
    if (term != "" && term != undefined) {
      this.albums = this.dataService.searchAlbums(term).then(res => {
        this.albums = res;
      });
    }
  }
  
  refreshView() {
     if (this.search==true) {
     } else {
       this.myAlbums = this.dataService.getMyAlbums();
     }
  }

}
