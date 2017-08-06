import { Routes } from '@angular/router';

import { NewSongsComponent } from './route/new-songs/new-songs.component';
import { ContactComponent } from './route/contact/contact.component';
import { ArtistComponent } from './route/artist/artist.component';
import { SongDetailComponent } from './route/song-detail/song-detail.component';
import { ProducerProfileComponent } from './route/producer-profile/producer-profile.component';
import { ArtistProfileComponent } from './route/artist-profile/artist-profile.component';
import { MusicUploadComponent } from './route/music-upload/music-upload.component';
import { EditorsPickComponent } from './route/editors-pick/editors-pick.component';
import { TopTenComponent } from './route/top-ten/top-ten.component';
import { MusicPolicyComponent } from './route/music-policy/music-policy.component';
import { AboutComponent } from './route/about/about.component';
import { MainComponent } from './route/main/main.component';
import { RequestComponent } from './route/request/request.component';
import { LoginComponent } from './route/login/login.component';
import { PlayerComponent } from './route/player/player.component';


export const routes: Routes = [
  { path: 'new-songs', component: NewSongsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'song-detail/:id', component: SongDetailComponent },
  { path: 'producer-profile/:producerId', component: ProducerProfileComponent },
  { path: 'artist-profile/:artistId', component: ArtistProfileComponent },
  { path: 'music-upload', component: MusicUploadComponent },
  { path: 'editors-pick', component: EditorsPickComponent },
  { path: 'top-ten', component: TopTenComponent },
  { path: 'music-policy', component: MusicPolicyComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'main', component: MainComponent },
  { path: 'request-invite', component: RequestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'player', component: PlayerComponent },
  { path: '', component: PlayerComponent },
  { path: '**', redirectTo: "" }
];
