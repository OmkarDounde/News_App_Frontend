import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NewsService } from '../../news.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
})
export class PodcastComponent {
  news: any;
  currentDate: Date;
  constructor(private newsService: NewsService, private datePipe: DatePipe, private meta: Meta) {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.newsService.getAllCountry().subscribe((res) => {
      console.log(res.data);
      this.news = res.data[0];
      console.log(this.news);
      this.setSeoMetadata(this.news);
    });
  }

  private setSeoMetadata(news: any): void {
    document.title = 'Complted';
    // Set title
    console.log(news, 'News');
    this.meta.updateTag({ name: 'title', content: news.META_TITLE });

    // Set meta description
    this.meta.updateTag({ name: 'description', content: news.META_DESCRIPTION });
    this.meta.updateTag({ name: 'subhed', content: news.SUB_HEADLINE });
  }
}
