import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../album-interface';

import { DataService } from './../../services/data-service';

import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() columnTitle: string;
  @Input() albums: Album[];
  @Input() search: boolean; //search or playlist - true/false

  msgs: Message[] = [];

  constructor(
    private dataService: DataService,
    private message: MessageService
  ) { }

  ngOnInit() { }

  addAlbum(album: Album) {
    this.dataService.addAlbum(album);
    let mess = 'album:' + album.collectionName + ' added to playlist.';
    this.message.add({ severity: 'success', summary: 'Service Message', detail: mess });
  }

  deleteAlbum(album: Album) {
    this.dataService.deleteAlbum(album);
    this.albums = this.dataService.getMyAlbums();
    let mess = 'album:' + album.collectionName + ' deleted from playlist.';
    this.message.add({severity:'success', summary:'Service Message', detail: mess});
  }

}
