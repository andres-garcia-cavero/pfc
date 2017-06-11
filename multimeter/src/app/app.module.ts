import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { CreditsComponent } from './credits/credits.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { DevicesComponent } from './devices/devices.component';
import { ToolsComponent } from './tools/tools.component';
import { ToolsIperfComponent } from './tools-iperf/tools-iperf.component';
import { ToolsDItgComponent } from './tools-d-itg/tools-d-itg.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
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
    HomeComponent,
    HelpComponent,
    DevicesComponent,
    ToolsComponent,
    ToolsIperfComponent,
    ToolsDItgComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
