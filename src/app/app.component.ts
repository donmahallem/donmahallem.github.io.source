import { Component } from '@angular/core';
import { GithubApiService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DonMahallem';
  constructor(private test: GithubApiService) {
    test.getRepos('DonMahallem').subscribe(console.log, console.error);
  }
}
