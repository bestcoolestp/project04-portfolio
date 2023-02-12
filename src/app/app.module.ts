import { HomeComponent } from './public-components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { TestService } from './shared/services/test.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Counter2Service } from './shared/services/counter2.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterService } from './shared/services/counter.service';
import { AuthModule } from './auth/auth.module';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { counterFactory } from './shared/services/counter.factory';
@NgModule({
  declarations: [
    AppComponent,
    HowItWorksComponent,
    AboutUsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    counterFactory,
    TestService,
    {
      provide: 'appTitle',
      useValue: {
        title: 'this is title',
        description: 'this is the title description',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
