import {Routes} from '@angular/router';
import { Home } from './e2e-app.component';
import { AlertModalE2E } from '../alert-modal/alert-modal.component';

export const E2E_APP_ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'alert-modal', component: AlertModalE2E }
];
