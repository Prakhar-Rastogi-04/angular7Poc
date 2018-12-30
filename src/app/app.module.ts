import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MyDiaryComponent } from './my-diary/my-diary.component';
import { VideosComponent } from './videos/videos.component';
import { PictureGallaryComponent } from './picture-gallary/picture-gallary.component';
import { ErrorComponent } from './error/error.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HeaderComponent } from './header/header.component';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { NewNavComponent } from './new-nav/new-nav.component';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';
import { NameComponent } from './name/name.component';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { LoggedHomeComponent } from './logged-home/logged-home.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ModalBodyComponent } from './modal-body/modal-body.component';
import { LoginTdfComponent } from './login-tdf/login-tdf.component';
import { SignupMdfComponent } from './signup-mdf/signup-mdf.component';
import { SpaPlaceholderComponent } from './spa-placeholder/spa-placeholder.component';
import { LoggedinHeaderComponent } from './loggedin-header/loggedin-header.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LibraryComponent } from './library/library.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageCardsComponent } from './message-cards/message-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    HomeComponent,
    MyDiaryComponent,
    VideosComponent,
    PictureGallaryComponent,
    ErrorComponent,
    AnalyticsComponent,
    HeaderComponent,
    MatNavComponent,
    NewNavComponent,
    DefaultDashboardComponent,
    NameComponent,
    DefaultHomeComponent,
    LoggedHomeComponent,
    HeaderNavComponent,
    ModalBodyComponent,
    LoginTdfComponent,
    SignupMdfComponent,
    SpaPlaceholderComponent,
    LoggedinHeaderComponent,
    MyAccountComponent,
    SettingsComponent,
    NotificationsComponent,
    LibraryComponent,
    MessagesComponent,
    MessageCardsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalBodyComponent]
})
export class AppModule { }
