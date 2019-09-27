import { HttpService } from './shared/services/http-service/http.service';
import { ApiService } from './shared/services/api-service/api.service';
import { HelperService } from './shared/services/helper/helper.service';
import { MaterialModule } from './shared/modules/material/material.module';
import { GraphModule } from './shared/modules/graph/graph.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './todos/show-data/show-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    NavbarComponent,
    DialogComponent,
  ],
  entryComponents:[DialogComponent],
  imports: [
    MaterialModule,
    GraphModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [HelperService, ApiService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
