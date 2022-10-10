import { MocDestinationBandCharging } from './../moc-destination-band-charging/moc-destination-band-charging';
import { ApnBands } from "../apn-bands/apn-bands";
import { ChargingPolicy } from "../charging-policy/charging-policy";
import { CurrencyTax } from "../currency-tax/currency-tax";
import { DestinationBands } from "../destination-bands/destination-bands";
import { DocumentHeader } from "../document-header/document-header";
import { MocCallTypes } from "../moc-call-types/moc-call-types";
import { MocRatingInterval } from "../moc-rating-interval/moc-rating-interval";
import { SpecialDays } from "../special-days/special-days";
import { TimeBands } from "../timebands/timebands";
import { MoSms } from '../mo-sms/mo-sms';
import { MtSms } from '../mt-sms/mt-sms';
import { PsDataRatingInterval } from '../ps-data-rating-interval/ps-data-rating-interval';
import { PsData } from '../ps-data/ps-data';
import { MtcChargedReciprocatingRatingInterval } from '../mtc-charged-always-rating-interval/mtc-charged-always-rating-interval';
import { MtcCallTypes } from '../mtc-call-types/mtc-call-types';
import { MtcDestinationBandCharging } from '../mtc-destination-band-charging/mtc-destination-band-charging';

export class Tadig {
    tadig: string | undefined;
    documentHeader: DocumentHeader | undefined;
    currencyAndTax: CurrencyTax[] = [];
    specialDays: SpecialDays[] = [];
    timeBands: TimeBands[] = [];
    destinationBands: DestinationBands[] = [];
    apnBands: ApnBands[] = [];
    chargingPolicy: ChargingPolicy[] = [];
    mocRatingInterval: MocRatingInterval[] = [];
    mocCallTypes: MocCallTypes[] = [];
    mocDestinationBandCharging: MocDestinationBandCharging[] = [];
    mtcChargedAlwaysRatingInterval: any[] = [];
    mtcChargedReciprocatingRatingInterval: MtcChargedReciprocatingRatingInterval[] = [];
    mtcCallTypes: MtcCallTypes[] = [];
    mtcDestinationBandCharging: MtcDestinationBandCharging[] = [];
    moSms: MoSms[] = [];
    mtSms: MtSms[] = [];
    psDataRatingInterval: PsDataRatingInterval[] = [];
    psData: PsData[] = [];
    wLanRatingInterval: any[] = [];
    wLan: any[] = [];

    

    constructor(oTadig: Partial<Tadig>) {
        this.tadig = oTadig.tadig;
        this.documentHeader = oTadig.documentHeader == undefined ? undefined : new DocumentHeader(oTadig.documentHeader);
        this.currencyAndTax = oTadig.currencyAndTax == undefined ? [] : CurrencyTax.fromArray(oTadig.currencyAndTax);
        this.specialDays = oTadig.specialDays == undefined ? [] : SpecialDays.fromArray(oTadig.specialDays);
        this.timeBands = oTadig.timeBands == undefined ? [] : TimeBands.fromArray(oTadig.timeBands);
        this.destinationBands = oTadig.destinationBands == undefined ? [] : DestinationBands.fromArray(oTadig.destinationBands);
        this.apnBands = oTadig.apnBands == undefined ? [] : ApnBands.fromArray(oTadig.apnBands);
        this.chargingPolicy = oTadig.chargingPolicy == undefined ? [] : ChargingPolicy.fromArray(oTadig.chargingPolicy);
        this.mocRatingInterval = oTadig.mocRatingInterval == undefined ? [] : MocRatingInterval.fromArray(oTadig.mocRatingInterval);
        this.mocCallTypes = oTadig.mocCallTypes == undefined ? [] : MocCallTypes.fromArray(oTadig.mocCallTypes);
        this.mocDestinationBandCharging = oTadig.mocDestinationBandCharging == undefined ? [] : MocDestinationBandCharging.fromArray(oTadig.mocDestinationBandCharging);
        this.mtcChargedAlwaysRatingInterval = oTadig.mtcChargedAlwaysRatingInterval == undefined ? [] : (oTadig.mtcChargedAlwaysRatingInterval);
        this.mtcChargedReciprocatingRatingInterval = oTadig.mtcChargedReciprocatingRatingInterval == undefined ? [] : (oTadig.mtcChargedReciprocatingRatingInterval);
        this.mtcCallTypes = oTadig.mtcCallTypes == undefined ? [] : (oTadig.mtcCallTypes);
        this.mtcDestinationBandCharging = oTadig.mtcDestinationBandCharging == undefined ? [] : (oTadig.mtcDestinationBandCharging);
        this.moSms = oTadig.moSms == undefined ? [] : MoSms.fromArray(oTadig.moSms);
        this.mtSms = oTadig.mtSms == undefined ? [] : MtSms.fromArray(oTadig.mtSms);
        this.psDataRatingInterval = oTadig.psDataRatingInterval == undefined ? [] : PsDataRatingInterval.fromArray(oTadig.psDataRatingInterval);
        this.psData = oTadig.psData == undefined ? [] : PsData.fromArray(oTadig.psData);
        this.wLanRatingInterval = oTadig.wLanRatingInterval == undefined ? [] : (oTadig.wLanRatingInterval);
        this.wLan = oTadig.wLan == undefined ? [] : (oTadig.wLan);
    }

    public static fromDTO(dto: any): Tadig {
        return new Tadig({ ...dto });
    }

    public static fromArray(tadigs: Partial<Tadig>[]): Tadig[] {
        return tadigs.map((tadig) => new Tadig(tadig));
    }

    public static fromDTOArray(dtos: any[]): Tadig[] {
        return dtos.map((dto) => Tadig.fromDTO(dto));
    }
}