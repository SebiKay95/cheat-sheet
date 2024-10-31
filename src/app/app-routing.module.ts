import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { HeaderComponent } from "./toolbar/toolbar.component";


const routes: Routes = [
    {path: '', component: HeaderComponent}
];


@NgModule({
    imports: [BrowserAnimationsModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}