import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
//import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button'



const Material= [
  MatToolbarModule,
  MatCardModule,
  LayoutModule,
  MatIconModule,
 // FlexLayoutModule,
  MatButtonModule

];

@NgModule({

  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
