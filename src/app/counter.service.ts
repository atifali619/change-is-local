import {ApplicationRef, effect, inject, Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private appRef = inject(ApplicationRef);
  private internalCounter = signal(0);
  public counter = this.internalCounter.asReadonly();

  constructor() {
    effect(() => {
      this.counter();
      this.appRef.tick();
    });
  }


  public increment(){
    this.internalCounter.update(v => v + 1);
  }
}
