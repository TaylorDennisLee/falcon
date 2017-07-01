import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SuiAccordionModule } from 'ng2-semantic-ui';


import { AppComponent } from './app.component';
import { levelTwoReducer } from './reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(levelTwoReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    SuiAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
