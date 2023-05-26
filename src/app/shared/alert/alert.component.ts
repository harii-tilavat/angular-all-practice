import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() error!:string;
  @Output() closeEvent =new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onClose():void{
    this.closeEvent.emit();
  }
}
