import {Routes} from '@angular/router';

import {AppUrlPaths} from './app.url-paths';

import {HomeComponent} from './pages/home/home.component';
import {ListComponent} from './pages/list/list.component';

export const routesList: Routes = [
  {
    path: AppUrlPaths.Form,
    component: HomeComponent
  },
  {
    path: AppUrlPaths.List,
    component: ListComponent
  }
];
