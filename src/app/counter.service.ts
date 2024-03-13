import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private internalCounter: WritableSignal<number> = signal(0);
  public counter = this.internalCounter.asReadonly();

  public increment(): void {
    this.internalCounter.update((value) => value + 1);
  }
}
