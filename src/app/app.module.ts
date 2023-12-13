import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {ChildComponent} from "./child.component";
import {ChildTwoComponent} from "./child-two.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CommonModule, RouterOutlet, ChildComponent, ChildTwoComponent],
})
export class AppModule {}
