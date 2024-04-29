import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NftComponent } from './pages/nft/nft.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NftSingleCardComponent } from './components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from './components/nft/nft-dual-card/nft-dual-card.component';
import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { NftAuctionsTableComponent } from './components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftAuctionsTableItemComponent } from './components/nft/nft-auctions-table-item/nft-auctions-table-item.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { PodcastHeaderComponent } from './components/podcast/podcast-header/podcast-header.component';
import { PodcastCardBannerComponent } from './components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastPlayerComponent } from './components/podcast/podcast-player/podcast-player.component';
import { PodcastCardItemComponent } from './components/podcast/podcast-card-item/podcast-card-item.component';
import { PodcastListComponent } from './components/podcast/podcast-list/podcast-list.component';
import { WordLimitPipe } from 'src/app/shared/pipes/word-limit.pipe';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NftComponent,
    NftSingleCardComponent,
    NftDualCardComponent,
    NftChartCardComponent,
    NftHeaderComponent,
    NftAuctionsTableComponent,
    NftAuctionsTableItemComponent,
    PodcastComponent,
    PodcastHeaderComponent,
    PodcastCardBannerComponent,
    PodcastPlayerComponent,
    PodcastCardItemComponent,
    PodcastListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    PipeModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [
    DatePipe,
    // Add DatePipe here
  ],
})
export class DashboardModule {}
