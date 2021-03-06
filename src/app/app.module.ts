import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GitSearchService } from './services/git-search.service';
import { GitSearchComponent } from './components/git-search/git-search.component';
import { AdditionalDataComponent } from './components/additional-data/additional-data.component';
import { RepositoryDisplayComponent } from './components/repository-display/repository-display.component';
import { FadeDirective } from './directives/fade.directive';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store'
import { reducer } from './store/reducers/search.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './store/effects/search.effects';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    RepositoryDisplayComponent,
    AdditionalDataComponent,
    FadeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({model: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([SearchEffects]),
  ],
  providers: [
    GitSearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
