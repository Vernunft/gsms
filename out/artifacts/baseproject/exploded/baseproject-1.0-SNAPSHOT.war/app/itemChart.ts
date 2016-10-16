import { Component, ChangeDetectorRef } from "@angular/core";
import { DataList }                from './DataList';
import { DataListService }         from './DataListService';


interface Configuration {
    dataProvider: DataList[];
    title: string;
    valueField:string;
}

const makeChart = ({ dataProvider,title ,valueField} : Configuration) => {
    return {
        "type": "serial",
        "theme": "light",
        "marginRight": 50,
        "dataProvider": dataProvider,
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left",
            "title": title,
            "axisColor":"#B3E7F9",
            "axisThickness":0

        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "<b>[[deptName]]: [[value]]</b>",
            "fillColorsField": "color",
            "fillAlphas": 0.8,
            "lineAlpha": 0,
            "type": "column",
            "valueField": valueField,
            // "fillColors": fillColors
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "CategoryAxisWidth":0.1,
        "categoryField": "deptName",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 45,
            "gridAlpha":0,
            "axisColor":"#B3E7F9"
        },
        "creditsPosition" :"top-right",
        "color":"#F8FAFF",
        "export": {
            "enabled": true
        }
    };
};
@Component({
    selector: "itemChart-app",
    template: `  <amCharts [id]="itemCountchart" [options]="itemChart"[style.width.%]="110" [style.height.%]="100"></amCharts>               
  `
})
export class itemChartComponent {
    itemList:DataList[];
    private id: string = "itemCountchart";
    ngOnInit(){
        setInterval(()=>{
            this.getItemList();
        },10000)
    }

    constructor(private dataListService: DataListService) {
        this.getItemList();
    }
    private itemChart: any = makeChart({
        dataProvider:  this.itemList,
        title:"资源项（类）",
        valueField:"itemCount"
    });


    getItemList(): void {
        this.dataListService
            .getItemList()
            .then(itemList => {
                this.itemList =itemList;
                this.itemChart = makeChart({
                    dataProvider:this.itemList,
                    title:"资源项（类）",
                    valueField:"itemCount"
                });
            })
    }

}