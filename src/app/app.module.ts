import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SideBarComponent } from './side-bar/side-bar/side-bar.component'
import { ContentHeaderComponent } from './content-header/content-header.component'

import { GridModule } from '@syncfusion/ej2-angular-grids'
// import the DashboardLayoutModule for the Dashboard Layout component
import {
  TextBoxModule,
  NumericTextBoxModule,
} from '@syncfusion/ej2-angular-inputs'
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'
import {
  ChartAllModule,
  AccumulationChartAllModule,
  RangeNavigatorAllModule,
} from '@syncfusion/ej2-angular-charts'
import { MapsAllModule } from '@syncfusion/ej2-angular-maps'
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';

import { Dashbord1Component } from './pages/dashbord1/dashbord1.component'
import { Dashbord2Component } from './pages/dashbord2/dashbord2.component'
import { Dashbord3Component } from './pages/dashbord3/dashbord3.component'
import { Menu1Component } from './components/menu1/menu1.component';
import { Dashbord22Component } from './pages/dashbord22/dashbord22.component'

@NgModule({
  declarations: [
    AppComponent,
    Dashbord1Component,
    Dashbord2Component,
    Dashbord3Component,
    SideBarComponent,
    ContentHeaderComponent,
    Menu1Component,
    Dashbord22Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GridModule,
    DashboardLayoutModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    MapsAllModule,
    TextBoxModule,
    NumericTextBoxModule,
    ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent, SideBarComponent, ContentHeaderComponent],
  entryComponents: [Menu1Component],
})
export class AppModule {}
