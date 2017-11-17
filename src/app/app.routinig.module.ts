import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes : Routes = [
	{ path : '' , redirectTo : 'home' , pathMatch : 'full' },
	{ path   : 'home' , loadChildren : "./modules/home/home.module#HomeModule" },
	{ path   : 'details' , loadChildren : "./modules/details/details.module#DetailsModule" },
	{ path : 'chat' , loadChildren : "./modules/chat/chat.module#ChatModule" }
];

@NgModule({
	imports:[ RouterModule.forRoot(routes) ],
	exports:[ RouterModule ]
})
export class AppRoutingModule{}



