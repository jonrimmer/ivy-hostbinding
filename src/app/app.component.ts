import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @HostBinding('style.color')
  red: SafeStyle;

  blue: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.red = this.sanitizer.bypassSecurityTrustStyle('red');
    this.blue = this.sanitizer.bypassSecurityTrustStyle('blue');
  }
}
