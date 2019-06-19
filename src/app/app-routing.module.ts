import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BreakfastCreateComponent} from'./breakfast-create/breakfast-create.component';
import {BreakfastEditComponent} from'./breakfast-edit/breakfast-edit.component';
import {BreakfastDisplayComponent} from'./breakfast-display/breakfast-display.component';

const routes: Routes = [
  { path: 'create', component: BreakfastCreateComponent },
  { path: 'edit', component: BreakfastEditComponent },
  { path: 'display', component: BreakfastDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
