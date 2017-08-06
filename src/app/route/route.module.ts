import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { NewSongsComponent } from './new-songs/new-songs.component';
import { ContactComponent } from './contact/contact.component';
import { ArtistComponent } from './artist/artist.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { ProducerProfileComponent } from './producer-profile/producer-profile.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { MusicUploadComponent } from './music-upload/music-upload.component';
import { EditorsPickComponent } from './editors-pick/editors-pick.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { MusicPolicyComponent } from './music-policy/music-policy.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NewSongsComponent,
    ContactComponent,
    ArtistComponent,
    SongDetailComponent,
    ProducerProfileComponent,
    ArtistProfileComponent,
    MusicUploadComponent,
    EditorsPickComponent,
    TopTenComponent,
    MusicPolicyComponent,
    AboutComponent,
    MainComponent,
    RequestComponent,
    LoginComponent,
    PlayerComponent,
  ],
  exports: [
    NewSongsComponent,
    ContactComponent,
    ArtistComponent,
    SongDetailComponent,
    ProducerProfileComponent,
    ArtistProfileComponent,
    MusicUploadComponent,
    EditorsPickComponent,
    TopTenComponent,
    MusicPolicyComponent,
    AboutComponent,
    MainComponent,
    RequestComponent,
    LoginComponent,
    PlayerComponent,
  ]
})
export class RouteComponentsModule { }
