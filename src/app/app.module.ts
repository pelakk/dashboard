import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { TopBarComponent } from './content/topBar/top-bar/top-bar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HomeComponent } from './content/mainContent/home/home/home.component';
import { TaskboardComponent } from './content/mainContent/taskboard/taskboard/taskboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopBarComponent,
    ContentComponent,
    HomeComponent,
    TaskboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
