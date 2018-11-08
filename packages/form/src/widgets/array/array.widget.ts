import { Component, OnInit } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array',
  templateUrl: './array.widget.html',
  preserveWhitespaces: false
})
export class ArrayWidget extends ArrayLayoutWidget implements OnInit {
  addTitle: string;
  addType: string;
  removeTitle: string;
  arraySpan = 8;

  get addDisabled() {
    return (
      this.schema.maxItems &&
      (this.formProperty.properties as any[]).length >= this.schema.maxItems
    );
  }

  get l() {
    return this.formProperty.root.widget.sfComp.locale;
  }

  ngOnInit(): void {
    if (this.ui.grid && this.ui.grid.arraySpan)
      this.arraySpan = this.ui.grid.arraySpan;

    this.addTitle = this.ui.addTitle || this.l['addText'];
    this.addType = this.ui.addType || 'dashed';
    this.removeTitle =
      this.ui.removable === false ? null : this.ui.removeTitle || this.l['removeText'];
  }

  addItem() {
    this.formProperty.add(null);
  }

  removeItem(index: number) {
    this.formProperty.remove(index);
  }
}
