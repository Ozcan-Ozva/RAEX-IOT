import { Component, ViewChild, Input, ViewEncapsulation } from '@angular/core';
import { ComponentPortal, CdkPortalOutlet } from '@angular/cdk/portal';

@Component({
    template: '<ng-template cdkPortalOutlet></ng-template>',
    styleUrls: ['./dialog.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'dialog-container',
        '[style.min-width]': 'width',
        '[style.min-height]': 'height',
    },
})
export class DialogContainer {
    @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet: CdkPortalOutlet | undefined;

    @Input() width: string | number = 0;
    @Input() height: string | number = 0;

    constructor() {}

    public attachComponentPortal(componentPortal: ComponentPortal<any>) {
        if (this.portalOutlet != undefined) {
            this.portalOutlet.attachComponentPortal(componentPortal);
        }
    }

    public close() {}
}
