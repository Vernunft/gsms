import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent,AllComponent,DateComponent}   from './app.component';
import {DataListService} from './DataListService';
import {DataList} from './DataList';
import {totalChartComponent} from './amcharts.component';
import {itemChartComponent} from './itemChart'
import {AmChartsDirective} from './amcharts.directive';
import './rxjs-extensions';
@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent,AllComponent,DateComponent,AmChartsDirective,totalChartComponent,itemChartComponent],
    providers: [
        DataListService,
    ],
    bootstrap: [AppComponent,AllComponent,DateComponent,totalChartComponent,itemChartComponent],

})

export class AppModule {
}