import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
