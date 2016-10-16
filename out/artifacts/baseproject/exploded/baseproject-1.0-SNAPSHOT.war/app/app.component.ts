import {Component, Inject, OnInit, Directive, ElementRef, Input, Output, ChangeDetectorRef} from '@angular/core';
import format = require("core-js/fn/date/format");
import {DataListService} from './DataListService'
import {DataList} from './DataList'
import '../js/countUp.js'
import DateTimeFormat = Intl.DateTimeFormat;
declare var CountUp: any, mina: any;

@Component({
    selector: 'dept-app',
    template: `
     <ul>
                    <li><span ><strong id = "deptCount"></strong>家</span>单位</li>
                    <li><span><strong id="itemCount"></strong>项</span>资源项</li>
                    <li>
                        <span>
                          <strong id="totalCount"></strong><i *ngIf="count<=9999">万</i>
                          <i *ngIf="count>=10000">亿</i>
                        </span>
                        资源总量
                     </li>
     </ul>
    `

})
export class AppComponent implements OnInit {
    deptCount: number;
    itemCount: number;
    totalCount: number;
    count: number;

    constructor(private dataListService: DataListService) {
        // setInterval(()=>{
        //     this.getDeptCount();
        //     this.getTotalCount();
        //     this.getItemCount();
        // },10000);
    }

    ngOnInit() {
        this.getDeptCount();
        this.getItemCount();
        this.getTotalCount();
        setInterval(()=> {
            this.getDeptCount();
            this.getTotalCount();
            this.getItemCount();
        }, 10000);

    }

    getDeptCount(): void {

        this.dataListService
            .getDeptCount()
            .then(deptCount => {
                this.deptCount = deptCount;
                var demo = new CountUp("deptCount", 0, this.deptCount, 0, 2.5);
                demo.start();
            })

        ;

    }

    getItemCount(): void {
        this.dataListService
            .getItemCount()
            .then(itemCount => {
                this.itemCount = itemCount;
                var demo = new CountUp("itemCount", 0, this.itemCount, 0, 2.5);
                demo.start();
            })
        ;


    }

    getTotalCount(): void {
        this.dataListService
            .getTotalCount()
            .then(totalCount => {
                this.count = totalCount;
                if (totalCount <= 9999) {
                    this.totalCount = totalCount;
                }
                if (totalCount >= 10000) {
                    this.totalCount = Math.round(totalCount / 10000);
                }
                var demo = new CountUp("totalCount", 0, this.totalCount, 2, 2.5);
                demo.start();
            })
        ;


    }
}
@Component({
    selector: 'all-app',
    template: `
            <ul>
                <li *ngFor="let dataList of dataLists" >
                    <a href="#">  
                      <s class="{{dataList.iconClass}}"></s>
                        <div class="title">{{dataList.deptName}}</div>
                        <div class="info">
                            <span class="num1">{{dataList.itemCount}}</span>
                            <span class="num2">类</span>
                            <span class="num3">
                            {{dataList.totalFormat}}</span>
                            <span class="num4"  *ngIf="dataList.totalCount<=9999">万条数据</span>
                            <span class="num4"  *ngIf="dataList.totalCount>=10000">亿条数据</span>
                        </div>
                    </a>
                </li>
            </ul>
       
    `,
    styleUrls: ['app/index.css']

})
export class AllComponent {
    dataLists: DataList[];


    constructor(private dataListService: DataListService) {
    }

    ngOnInit() {
        this.getAll();
        setInterval(()=> {
            this.getAll()
        }, 10000)
    }

    getAll(): void {
        this.dataListService
            .getAll()
            .then(dataLists => this.dataLists = dataLists)
        ;
    }
}

@Component({
    selector: 'date-app',
    template: `
      {{currentTime|date:"yyyy-MM-dd HH:mm:ss"}}
    `

})
export class DateComponent {
    currentTime: Date;

    constructor() {
        this.currentTime = new Date;
        setInterval(()=> {
            this.currentTime = new Date;

        }, 100);
    }

}

