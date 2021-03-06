import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { RouterModule } from '@angular/router';
import { ROUTES} from './users.routes'; 
import { UsersService} from './users.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from './../material.module'; 

@NgModule({
  declarations: [ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[UsersService]
})
export class UsersModule { }
