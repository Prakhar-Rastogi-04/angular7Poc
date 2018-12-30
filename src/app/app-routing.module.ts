import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import{ PostsComponent } from './posts/posts.component';
import{ UsersComponent } from './users/users.component';
import{ HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { PictureGallaryComponent } from './picture-gallary/picture-gallary.component';
import { ErrorComponent } from './error/error.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import{ DefaultHomeComponent } from './default-home/default-home.component';
import { LoggedHomeComponent } from './logged-home/logged-home.component';
import { MessagesComponent } from './messages/messages.component';
import { LibraryComponent } from './library/library.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultHomeComponent
  },
  {
    path: 'userHome',
    component: LoggedHomeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'myAccount',
    component: MyAccountComponent 
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'picuteGallary',
    component: PictureGallaryComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
