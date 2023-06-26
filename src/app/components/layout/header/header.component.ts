import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() sectionInput!: string;
  @Output() onChangeSectionEmitter = new EventEmitter<string>();

  ngOnInit(): void {}

  onChangeSection(newSection: string) {
    this.onChangeSectionEmitter.emit(newSection);
  }
}
