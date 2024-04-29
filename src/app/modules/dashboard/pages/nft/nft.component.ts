import { Component, OnInit } from '@angular/core';
import { Nft } from '../../models/nft';
import { NewsService } from '../../news.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
})
export class NftComponent implements OnInit {
  news: any;
  currentDate: Date;
  constructor(private newsService: NewsService, private datePipe: DatePipe) {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.newsService.getAllCountry().subscribe((res) => {
      console.log(res.data);

      this.news = res.data;
    });
  }

  formattedDate(): string {
    return this.datePipe.transform(this.currentDate, 'dd.MM.yyyy') || '';
  }
}
