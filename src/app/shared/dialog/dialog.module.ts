import { NgModule } from '@angular/core';
import { Dialog } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DialogContainer } from './dialog';

@NgModule({
    imports: [OverlayModule, PortalModule],
    exports: [],
    declarations: [DialogContainer],
    providers: [Dialog]
})
export class DialogModule {}
