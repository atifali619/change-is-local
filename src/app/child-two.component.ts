import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ColorsService } from './colors.service';
import { GrandChildComponent } from './grand-child.component';

@Component({
  standalone: true,
  selector: 'child-two',
  template: `
    <div class="card second-child" [style.background]="changeBackground()">
      <div class="card-header">
        <h1 class="text-header font-32">Second Child Component</h1>
      </div>
    </div>
  `,
  imports: [GrandChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoComponent {
  private colorsService = inject(ColorsService);

  public changeBackground(): string {
    return this.colorsService.getRandomColor();
  }
}
