import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flyout-dialog',
  templateUrl: './flyout-dialog.component.html',
  styleUrl: './flyout-dialog.component.scss'
})
export class FlyoutDialogComponent {
  @Input() message: string = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
