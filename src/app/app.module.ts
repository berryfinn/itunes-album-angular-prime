import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './pages/album-list/album-list.component';

import { DataService } from './services/data-service';

import { FormsModule } from '@angular/forms'; 
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToastModule} from 'primeng/toast';
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/api';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpModule,
    FormsModule,
    DataViewModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    ToastModule, 
    GrowlModule
  ],
  providers: [
    DataService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
