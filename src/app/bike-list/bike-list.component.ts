import { Component, OnInit } from '@angular/core';
import { IBike } from './bike';

@Component({
    selector: 'app-bike-list',
    templateUrl: './bike-list.component.html',
    styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
    pageTitle: string = "Joe`s Bikes";
    imageWidth: number = 50;
    imageMargin: number = 2;

    showImage: boolean = true;
    _showMens: string;
    _showWomens:string;
    _showKids: string;

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

    get showMens(): string {
        return this._showMens
    }
    set showMens(value: string) {
        this._showMens = value;
        this.filteredBikes = this.filter(this._showMens);
    }
    get showWomens(): string {
        return this._showWomens;
    }
    set showWomens(value: string) {
        this._showWomens = value;
        this.filteredBikes = this.filter(this._showWomens);
    }
    get showKids(): string {
        return this._showKids;
    }
    set showKids(value: string) {
        this._showKids = value;
        this.filteredBikes = this.filter(this._showKids);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    changeBoxMens(type: string):void{
        this.filteredBikes= this.showMens ? this.filter(type): this.bikes;
    }
    changeBoxWomens(type: string):void{
        this.filteredBikes= this.showWomens ? this.filter(type): this.bikes;
    }
    changeBoxKids(type: string):void{
        this.filteredBikes= this.showKids ? this.filter(type): this.bikes;
    }
    filter(filterBy:string):IBike[] {
        return this.bikes.filter((bikes: IBike) =>
        bikes.category.toLocaleLowerCase().indexOf(filterBy) != -1);
}
    ngOnInit(): void {
    }
}

