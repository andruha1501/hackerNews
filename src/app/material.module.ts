import { NgModule } from '@angular/core';
import {MatButtonModule,MatToolbarModule,MatListModule} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatToolbarModule,
        MatListModule
    ],
    exports: [
        MatButtonModule, 
        MatToolbarModule,
        MatListModule
    ]
})
export class MaterialModule { }
