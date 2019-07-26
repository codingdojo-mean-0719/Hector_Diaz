import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { LedgerDetailComponent } from './ledger-detail/ledger-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'coins/mine',
    component: MineComponent,
  },
  {
    path: 'coins/buy',
    component: BuyComponent,
  },
  {
    path: 'coins/sell',
    component: SellComponent,
  },
  {
    path: 'coins/ledger',
    component: LedgerComponent,
  },
  {
    path: 'coins/ledger/:id',
    component: LedgerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
