import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoInputComponent } from './video-input/video-input.component';


const routes: Routes = [
  { path: '', redirectTo: 'video-input', pathMatch: 'full' },
  { path: 'video-player', component: VideoPlayerComponent },
  { path: 'video-input', component: VideoInputComponent },
  // Add other routes for your application if needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
