import { NgModule } from '@angular/core';
import {MatButtonModule,MatToolbarModule,MatListModule,MatProgressSpinnerModule} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatToolbarModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule, 
        MatToolbarModule,
        MatListModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }
