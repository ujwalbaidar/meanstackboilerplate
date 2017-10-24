import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	public menuItems: any;

	constructor() { }

	ngOnInit() {
		this.getHeaderMenus();
	}

	getHeaderMenus(){
		let menuItems = [
			{
				name: 'Home',
				routerLink: '/home'
			},
			{
				name: 'Pricing',
				routerLink: '/pricing'
			},
			{
				name: 'Login'
			}
		];

		this.menuItems = menuItems;
	}
}
