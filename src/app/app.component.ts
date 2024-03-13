import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ChildComponent } from './child.component';
import { ChildTwoComponent } from './child-two.component';
import { ColorsService } from './colors.service';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent, ChildTwoComponent],
  template: `
    <div class="container">
      <div class="card" [style.background]="changeBackground()">
        <div class="card-header">
          <h1 class="text-header">Parent Component</h1>
          <button (click)="increment()">Increment</button>
        </div>
        <div class="card-content main-card-body">
          <child />
          <child-two />
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private colorsService = inject(ColorsService);
  private counterService = inject(CounterService);

  public increment(): void {
    this.counterService.increment();
  }

  public changeBackground(): string {
    return this.colorsService.getRandomColor();
  }
}
