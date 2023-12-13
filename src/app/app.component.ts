import {ApplicationRef, ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from "./child.component";
import {ColorsService} from "./colors.service";
import {ChildTwoComponent} from "./child-two.component";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
          <div class="card" [style.background]="changeBackground()">
              <div class="card-header">
                  <h1>Parent</h1>
              </div>
              <div class="card-content main-card-body">
                  <child/>
                  <child-two/>
              </div>
          </div>
          <button (click)="increment()">Increment</button>
      </div>
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private appRef = inject(ApplicationRef);
  private colorsService = inject(ColorsService);
  private counterService = inject(CounterService);

  changeBackground(){
    return  this.colorsService.getRandomColor();
  }

  increment(){
    this.counterService.increment();
  }
}
