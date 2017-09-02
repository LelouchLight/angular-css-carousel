// Set width property to 100% multiplied by number of images.

import { Component, OnInit } from '@angular/core';

import {Image} from './image.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public images = IMAGES;
  constructor() { }

  ngOnInit() {
  }
}

const IMAGES: Image[] = [
  { 'title': 'Ice Queen',
    'url': 'http://pixymotion.pictures/Cat/Celebs/Milla%20Jovovich%20Hot/_Milla%20Jovovich%20(25).jpg' },
  { 'title': 'Hooded Babe',
    'url': 'http://pixymotion.pictures/Cat/Celebs/Milla%20Jovovich%20Hot/1931_Milla%20(21).jpg' },
  { 'title': 'Bad Bitch',
    'url': 'https://icdn3.digitaltrends.com/image/re_tlc_01-1500x1000.jpg?ver=1' },
  { 'title': 'Chicken Good',
    'url': 'http://www.trbimg.com/img-59408542/turbine/la-1497400639-0g5eu9ib3d-snap-image' },
  { 'title': 'Run Bitch Run!',
    'url': 'http://c8.alamy.com/comp/CC29W1/milla-jovovich-resident-evil-afterlife-resident-evil-4-2010-CC29W1.jpg' }
];
