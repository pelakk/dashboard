import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/mainContent/home/home/home.component';
import { TaskboardComponent } from './content/mainContent/taskboard/taskboard/taskboard.component';

const routes: Routes = [
  {path: '', component: ContentComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'tasks', component: TaskboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
