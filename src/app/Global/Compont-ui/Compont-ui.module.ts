import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './Buttons/Buttons.component';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [ButtonsComponent]
})
export class CompontUiModule {}
