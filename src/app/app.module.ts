import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakfastDisplayComponent } from './breakfast-display/breakfast-display.component';
import { BreakfastEditComponent } from './breakfast-edit/breakfast-edit.component';
import { BreakfastCreateComponent } from './breakfast-create/breakfast-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreakfastService } from './services/breakfast.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BreakfastDisplayComponent,
    BreakfastEditComponent,
    BreakfastCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [BreakfastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
