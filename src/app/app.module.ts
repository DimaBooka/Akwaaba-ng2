import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteComponentsModule } from './route/route.module';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { routes } from './routes';

import { SharedModule } from './shared/shared.module';
import { PlaylistModule } from './playlist/playlist.module';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouteComponentsModule,
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
    SharedModule,
    PlaylistModule,
    PlayerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
