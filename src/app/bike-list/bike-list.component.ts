import { Component, OnInit } from '@angular/core';
import { IBike } from '../bike';
import { $ } from 'protractor';
// angular.module('bike', []);

@Component({
    selector: 'app-bike-list',
    templateUrl: './bike-list.component.html',
    styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
    pageTitle: string = "Joe`s bikes";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredBikes = this.listFilter ? this.performFilter(this.listFilter) : this.bikes;
    }
    filteredBikes: IBike[];
    bikes: IBike[] ;

    constructor() {
        this.filteredBikes = this.bikes;
    }
    performFilter(filterBy: string): IBike[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.bikes.filter((bike: IBike) =>
            bike.bikeName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }

    toggleImage(): void {

        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In OnInit');
    }

     TypeCtrl($bike) 
    {
        $bike = [];

        $bike.bikeIncludes = [];

        $bike.includeName = function (name) {
            var i = $bike.inArray(name, $bike.bikeIncludes);
            if (i > -1) {
                $bike.bikeIncludes.splice(i, 1);
            } else {
                $bike.bikeIncludes.push(name);
            }
        }

        $bike.typeFilter = function (bike) {
            if ($bike.bikeIncludes.length > 0) {
                if ($bike.inArray(bike.category, $bike.bikeIncludes) < 0)
                    return;
            }

            return bike;
        }
    }
    
}
