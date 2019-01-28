import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Album } from './../album';


@Injectable()
export class DataService {

    public SEARCH = 'Search';
    public MY_ALBUMS = 'My playlist';
    public COLUMN_TITLE1 = 'Search result for albums';
    public COLUMN_TITLE2 = 'List of my albums';

    public url = 'https://itunes.apple.com/search?entity=album&term=';

    public albums: Album[] = [];
    public iTunes: any[] = [];
    public myAlbums: Album[] = [];

    public ownAlbums = new Map(); 

    constructor(
        private http: Http
    ) { }

    searchAlbums(term: string) {

        return new Promise((resolve, reject) => {
            this.http.get(this.url + term).subscribe(
                data => {
                    let myObj = data["_body"];
                    let obj = JSON.parse(myObj);
                    this.iTunes = obj["results"];
                    this.albums = [];
                    this.iTunes.forEach(element => {
                        let a: Album = { collectionId: element.collectionId, collectionName: element.collectionName };
                        this.albums.push(a);
                    })
                    resolve(this.albums);
                },
                error => {
                    console.log("Error", error);
                    resolve(this.albums);
                });
        });
    }

    getMyAlbums() {
        return this.myAlbums;
    }

    addAlbum(album: Album) {
        this.myAlbums.push(album);
        this.ownAlbums.set(album.collectionId, album);
    }

    deleteAlbum(album: Album) {
        this.ownAlbums.delete(album.collectionId);
        this.myAlbums = [];
        this.ownAlbums.forEach( element => {
            this.myAlbums.push(element);
        })
    }

}
