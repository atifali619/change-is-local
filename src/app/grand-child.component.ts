import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal} from "@angular/core";
import {ColorsService} from "./colors.service";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import {CounterService} from "./counter.service";

@Component({
  standalone: true,
  selector: 'grand-child',
  template: `
      <div class="card" [style.background]="changeBackground()">
          <div class="card-header">
              <h1>GrandChild component: {{counter()}}</h1>
              <button (click)="increment()">Increment</button>
          </div>
      </div>
      `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent {
  private colorsService = inject(ColorsService);
  private counterService = inject(CounterService);

  counter = this.counterService.counter;

  changeBackground(){
    return  this.colorsService.getRandomColor();
  }

  increment(){
    this.counterService.increment();
  }
}
