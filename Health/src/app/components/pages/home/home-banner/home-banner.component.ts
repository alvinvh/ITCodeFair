import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-banner',
    templateUrl: './home-banner.component.html',
    styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    homeSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
        animateIn: `fadeIn`,
        animateOut: `fadeOut`,
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>'
		]
    }

}