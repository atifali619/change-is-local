import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { ColorsService } from './colors.service';
import { CounterService } from './counter.service';

@Component({
  standalone: true,
  selector: 'grand-child',
  template: `
    <div class="card" [style.background]="changeBackground()">
      <div class="card-header">
        <h1 class="text-header font-25">
          Grandchild Component : {{ counterService.counter() }}
        </h1>
        <button (click)="increment()">Increment</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
  private colorsService = inject(ColorsService);
  public counterService = inject(CounterService);

  public changeBackground(): string {
    return this.colorsService.getRandomColor();
  }

  public increment(): void {
    this.counterService.increment();
  }
}
