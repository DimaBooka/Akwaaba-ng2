import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SongComponent } from './components/song/song.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaylistComponent,
    SongComponent
  ],
  exports: [
    PlaylistComponent
  ]
})
export class PlaylistModule { }
