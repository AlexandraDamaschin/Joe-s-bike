import { Component, OnInit } from '@angular/core';
import { IBike } from '../bike';
import * as _ from 'lodash';
// import { $ } from 'protractor';
// angular.module('bike', []);

@Component({
    selector: 'app-bike-list',
    templateUrl: './bike-list.component.html',
    styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
    pageTitle: string = "Joe`s Bikes";
    imageWidth: number = 50;
    imageMargin: number = 2;

    _showImage: boolean = true;
    _showMens: boolean = true;
    _showWomens: boolean = true;
    _showKids: boolean = true;

    filteredBikes: IBike[];
    bikes: IBike[] =
    [
        {
            'bikeId': 1,
            'bikeName': 'MTB bike',
            'bikeCode': 'MTB-0020',
            'releaseDate': 'March 18, 2016',
            'description': 'Mens 29 inch mountain bike',
            'category': 'mens',
            'price': 532.99,
            'starRating': 4.2,
            'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177215/bike-mountain.png'
        },
        {
            'bikeId': 2,
            'bikeName': 'MTB bike',
            'bikeCode': 'MTB-0030',
            'releaseDate': 'June 15, 2017',
            'description': 'Womans 27 inch mountain bike',
            'category': 'womens',
            'price': 515.99,
            'starRating': 4.5,
            'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177215/bike-mountain.png'
        },
        {
            'bikeId': 3,
            'bikeName': 'Sports bike',
            'bikeCode': 'SB-1020',
            'releaseDate': 'May 9, 2016',
            'description': 'Mens Sports Bike',
            'category': 'mens',
            'price': 1099.99,
            'starRating': 4.8,
            'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177216/bike-sport.png'
        },
        {
            'bikeId': 4,
            'bikeName': 'Kids bike',
            'bikeCode': 'KB-3045',
            'releaseDate': 'October 28, 2016',
            'description': 'Kids bike with stabalizers',
            'category': 'kids',
            'price': 250.00,
            'starRating': 4.4,
            'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177214/bike-kid.png'
        },
        {
            'bikeId': 5,
            'bikeName': 'Ladies bike',
            'bikeCode': 'LB-4060',
            'releaseDate': 'March 10, 2016',
            'description': 'Ladies touring bike',
            'category': 'womens',
            'price': 450.00,
            'starRating': 4.9,
            'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177213/bike-female.png'
        },
        {
            'bikeId': 6,
            'bikeName': 'Kids blue bike',
            'bikeCode': 'KB-3075',
            'releaseDate': 'June 28, 2016',
            'description': 'Kids blue bike with stabalizers',
            'category': 'kids',
            'price': 290.00,
            'starRating': 4.8,
            'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177214/bike-kid.png'
        }
    ];

    constructor() {
        this.filteredBikes = this.bikes;
    }

    get showMens(): boolean {
        return this._showMens
    }
    set showMens(value: boolean) {
        this._showMens = value;
        this.filter();
    }
    get showWomens(): boolean {
        return this._showWomens;
    }
    set showWomens(value: boolean) {
        this._showWomens = value;
        this.filter();
    }
    get showKids(): boolean {
        return this._showKids;
    }
    set showKids(value: boolean) {
        this._showKids = value;
        this.filter();
    }
    toggleImage(): void {

        this._showImage = !this._showImage;
    }
    // performFilter(type: string, flag: boolean) {
    //     if (type=='mens') {
    //         this.bikes.forEach((bike: IBike) => {
    //             if (bike.category.toLowerCase() == type.toLowerCase())
    //                 this.filteredBikes.push(bike);
    //         });
    //     }
    //     else {
    //         this.filteredBikes = _.filter(this.filteredBikes, (bike: IBike) => {
    //             return bike.category.toLowerCase() != type.toLowerCase();
    //         });
    //     }
    // }
    filter() {
        this.filteredBikes = _.filter(this.filteredBikes, (bike: IBike) => {
            if(this._showMens && bike.category.toLowerCase() != 'mens'){
                return false;
            }
             if(this._showWomens && bike.category.toLowerCase() != 'womens'){
                return false;
            }
            if(this._showKids && bike.category.toLowerCase() != 'kids'){
                return false;
            }
            return true;
    });
}

    // filterBikes(bike: string) {
    //     if (bike.category == 'mens') {
    //         return this._showMens;
    //     }
    //     else if (type =='womens') {
    //         return this._showWomens;
    //     }
    //     else  ( type=='kids'){
    //         return this._showKids;
    //     }
    // }
    ngOnInit(): void {
    }
}

