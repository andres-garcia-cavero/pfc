import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxElectronModule } from 'ngx-electron';
import {APP_INITIALIZER} from '@angular/core';

// Bootstrap
import { TabsModule } from 'ngx-bootstrap/tabs';

// Components
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ConfigComponent } from './components/config/config.component';
import { CreditsComponent } from './components/credits/credits.component';
import { DevicesComponent } from './components/devices/devices.component';

import { HelpComponent } from './help/help.component';
import { ToolsComponent } from './tools/tools.component';
import { ToolsIperfComponent } from './tools-iperf/tools-iperf.component';
import { ToolsDItgComponent } from './tools-d-itg/tools-d-itg.component';
import { TestingLabComponent } from './components/testing-lab/testing-lab.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { ConfigService } from './services/config/config.service';
=======
import { ConfigComponent } from './config/config.component';
import { CreditsComponent } from './credits/credits.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { DevicesComponent } from './devices/devices.component';
import { ToolsComponent } from './tools/tools.component';
import { ToolsIperfComponent } from './tools-iperf/tools-iperf.component';
import { ToolsDItgComponent } from './tools-d-itg/tools-d-itg.component';
>>>>>>> 8cd62895e691ce986c16dd2aced897a3e1976033

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'testing-lab', component: TestingLabComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'devices/:id', component: DevicesComponent },
  { path: 'help', component: HelpComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'tools/iperf', component: ToolsIperfComponent },
  { path: 'tools/d-itg', component: ToolsDItgComponent }
];

@NgModule({
  declarations: [
    AppComponent,

    ConfigComponent,
    CreditsComponent,
<<<<<<< HEAD
=======
    HomeComponent,
>>>>>>> 8cd62895e691ce986c16dd2aced897a3e1976033
    HelpComponent,
    DevicesComponent,
    ToolsComponent,
    ToolsIperfComponent,
<<<<<<< HEAD
    ToolsDItgComponent,
    TestingLabComponent,
    HomeComponent,
    DashboardComponent
=======
    ToolsDItgComponent
>>>>>>> 8cd62895e691ce986c16dd2aced897a3e1976033
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxElectronModule
  ],
  providers: [
    ConfigService,
    {
     provide: APP_INITIALIZER,
     useFactory: (configService: ConfigService) => function() {return configService.load()},
     deps: [ConfigService],
     multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
