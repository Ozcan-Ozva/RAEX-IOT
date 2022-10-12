import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { DialogContainer } from './dialog';

export class DialogRef<Result = any> {
    private _result = new Subject<Result | undefined>();

    constructor(private overlayRef: OverlayRef, private container: DialogContainer, private id: number) {}

    public close(result: Result) {
        this._result.next(result);
        this._result.complete();
        this.overlayRef.dispose();
    }

    public dismiss() {
        this._result.complete();
        this.overlayRef.dispose();
    }

    public next(result?: Result) {
        this._result.next(result);
    }

    public get result(): Observable<Result | undefined> {
        return this._result.asObservable();
    }
}

export const DIALOG_DATA = 'tl.dialog.data';
export const DIALOG_REF = 'tl.dialog.ref';
