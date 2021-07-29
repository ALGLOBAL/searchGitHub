import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GitSearchService } from './services/git-search.service';
import { GitUserSearchService } from './services/git-user-search.service';
import { GitCodeSearchService } from './services/git-code-search.service';
import { GitSearchComponent } from './components/git-search/git-search.component';
import { UnifiedSearchService } from './services/unified-search.service';
import { RepositoryDisplayComponent } from './components/repository-display/repository-display.component';
import { FadeDirective } from './directives/fade.directive';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    RepositoryDisplayComponent,
    FadeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    GitSearchService,
    GitUserSearchService,
    GitCodeSearchService,
    UnifiedSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
