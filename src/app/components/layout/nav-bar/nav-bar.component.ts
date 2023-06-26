import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() sectionInput!: string;
  @Output() onChangeSectionEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChangeSection(newSection: string) {
    this.onChangeSectionEmitter.emit(newSection);
  }
}
