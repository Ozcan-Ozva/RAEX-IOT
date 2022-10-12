import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogContainer } from './dialog';
import { DialogRef, DIALOG_DATA, DIALOG_REF } from './dialog-ref';
import { take } from 'rxjs/operators';

var NEXT_UNIQUE_ID = 0;

@Injectable()
export class Dialog {
    constructor(private overlay: Overlay, private injector: Injector) {}

    open<Result, Data>(component: any, option: OverlayConfig, data: Data): DialogRef<Result> {
        let overlayRef = this.overlay.create({
            ...option,
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'dialog-backdrop',
            width: '100%',
            height: '100%',
            panelClass: 'dialog-panel',
        });
        overlayRef
            .backdropClick()
            .pipe(take(1))
            .subscribe(() => overlayRef.dispose());
        const containerPortal = new ComponentPortal(DialogContainer);
        const containerRef = overlayRef.attach(containerPortal);
        const dialogRef = new DialogRef<Result>(overlayRef, containerRef.instance, NEXT_UNIQUE_ID++);
        let injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: DIALOG_DATA, useValue: data },
                { provide: DIALOG_REF, useValue: dialogRef },
            ],
        });
        let componentPortal = new ComponentPortal(component, null, injector);
        containerRef.instance.attachComponentPortal(componentPortal);
        return dialogRef;
    }
}
