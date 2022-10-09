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

export class Tading {
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
    mtcChargedReciprocatingRatingInterval: any[] = [];
    mtcCallTypes: any[] = [];
    mtcDestinationBandCharging: any[] = [];
    moSms: MoSms[] = [];
    mtSms: MtSms[] = [];
    psDataRatingInterval: PsDataRatingInterval[] = [];
    psData: PsData[] = [];
    wLanRatingInterval: any[] = [];
    wLan: any[] = [];

    

    constructor(oTading: Partial<Tading>) {
        this.tadig = oTading.tadig;
        this.documentHeader = oTading.documentHeader == undefined ? undefined : new DocumentHeader(oTading.documentHeader);
        this.currencyAndTax = oTading.currencyAndTax == undefined ? [] : CurrencyTax.fromArray(oTading.currencyAndTax);
        this.specialDays = oTading.specialDays == undefined ? [] : SpecialDays.fromArray(oTading.specialDays);
        this.timeBands = oTading.timeBands == undefined ? [] : TimeBands.fromArray(oTading.timeBands);
        this.destinationBands = oTading.destinationBands == undefined ? [] : DestinationBands.fromArray(oTading.destinationBands);
        this.apnBands = oTading.apnBands == undefined ? [] : ApnBands.fromArray(oTading.apnBands);
        this.chargingPolicy = oTading.chargingPolicy == undefined ? [] : ChargingPolicy.fromArray(oTading.chargingPolicy);
        this.mocRatingInterval = oTading.mocRatingInterval == undefined ? [] : MocRatingInterval.fromArray(oTading.mocRatingInterval);
        this.mocCallTypes = oTading.mocCallTypes == undefined ? [] : MocCallTypes.fromArray(oTading.mocCallTypes);
        this.mocDestinationBandCharging = oTading.mocDestinationBandCharging == undefined ? [] : MocDestinationBandCharging.fromArray(oTading.mocDestinationBandCharging);
        this.mtcChargedAlwaysRatingInterval = oTading.mtcChargedAlwaysRatingInterval == undefined ? [] : (oTading.mtcChargedAlwaysRatingInterval);
        this.mtcChargedReciprocatingRatingInterval = oTading.mtcChargedReciprocatingRatingInterval == undefined ? [] : (oTading.mtcChargedReciprocatingRatingInterval);
        this.mtcCallTypes = oTading.mtcCallTypes == undefined ? [] : (oTading.mtcCallTypes);
        this.mtcDestinationBandCharging = oTading.mtcDestinationBandCharging == undefined ? [] : (oTading.mtcDestinationBandCharging);
        this.moSms = oTading.moSms == undefined ? [] : MoSms.fromArray(oTading.moSms);
        this.mtSms = oTading.mtSms == undefined ? [] : MtSms.fromArray(oTading.mtSms);
        this.psDataRatingInterval = oTading.psDataRatingInterval == undefined ? [] : PsDataRatingInterval.fromArray(oTading.psDataRatingInterval);
        this.psData = oTading.psData == undefined ? [] : PsData.fromArray(oTading.psData);
        this.wLanRatingInterval = oTading.wLanRatingInterval == undefined ? [] : (oTading.wLanRatingInterval);
        this.wLan = oTading.wLan == undefined ? [] : (oTading.wLan);
    }

    public static fromDTO(dto: any): Tading {
        return new Tading({ ...dto });
    }

    public static fromArray(tadings: Partial<Tading>[]): Tading[] {
        return tadings.map((tading) => new Tading(tading));
    }

    public static fromDTOArray(dtos: any[]): Tading[] {
        return dtos.map((dto) => Tading.fromDTO(dto));
    }
}