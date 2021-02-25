import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloListComponent } from './hello-list/hello-list.component';

const routes: Routes = [
  {path: 'hello', component: HelloListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
