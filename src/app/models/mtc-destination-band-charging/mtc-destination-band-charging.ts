export class MtcDestinationBandCharging {
    id: number | undefined;
    tadig: string | undefined;
    ctl1: string | undefined;
    ctl2: string | undefined;
    ctl3: string | undefined;
    ctl_details: string | undefined;
    timeband: string | undefined;
    charge_base: string | undefined;
    rating_interval_name: string | undefined;
    charge_type: string | undefined;
    rate: string | undefined;
    fix: string | undefined;
    applicable_taxes: string | undefined;
    reciprocal_description: string | undefined;

    
    constructor(mtcDestinationBandCharging: Partial<MtcDestinationBandCharging>) {
        this.id = mtcDestinationBandCharging.id;
        this.tadig = mtcDestinationBandCharging.tadig;
        this.ctl1 = mtcDestinationBandCharging.ctl1;
        this.ctl2 = mtcDestinationBandCharging.ctl2;
        this.ctl3 = mtcDestinationBandCharging.ctl3;
        this.ctl_details = mtcDestinationBandCharging.ctl_details;
        this.timeband = mtcDestinationBandCharging.timeband;
        this.charge_base = mtcDestinationBandCharging.charge_base;
        this.charge_type = mtcDestinationBandCharging.charge_type;
        this.rating_interval_name = mtcDestinationBandCharging.rating_interval_name;
        this.rate = mtcDestinationBandCharging.rate;
        this.fix = mtcDestinationBandCharging.fix;
        this.applicable_taxes = mtcDestinationBandCharging.applicable_taxes;
        this.reciprocal_description = mtcDestinationBandCharging.reciprocal_description;
    }

    public static fromDTO(dto: any): MtcDestinationBandCharging {
        return new MtcDestinationBandCharging({ ...dto });
    }

    public static fromArray(mtcDestinationBandChargings: Partial<MtcDestinationBandCharging>[]): MtcDestinationBandCharging[] {
        return mtcDestinationBandChargings.map((mtcDestinationBandCharging) => new MtcDestinationBandCharging(mtcDestinationBandCharging));
    }

    public static fromDTOArray(dtos: any[]): MtcDestinationBandCharging[] {
        return dtos.map((dto) => MtcDestinationBandCharging.fromDTO(dto));
    }
}