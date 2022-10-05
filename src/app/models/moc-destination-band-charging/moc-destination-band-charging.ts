export class MocDestinationBandCharging {
    id: number | undefined;
    tadig: string | undefined;
    services: string | undefined;
    location: string | undefined;
    destination_band: string | undefined;
    ctl1: string | undefined;
    ctl2: string | undefined;
    ctl3: string | undefined;
    ctl_details: string | undefined;
    iac: string | undefined;
    timeband: string | undefined;
    charge_base: string | undefined;
    charge_type: string | undefined;
    rating_interval_name: string | undefined;
    rate: string | undefined;
    fixed_charge: string | undefined;
    applicable_taxes: string | undefined;
    

    constructor(mocDestinationBandCharging: Partial<MocDestinationBandCharging>) {
        this.id = mocDestinationBandCharging.id;
        this.tadig = mocDestinationBandCharging.tadig;
        this.services = mocDestinationBandCharging.services;
        this.location = mocDestinationBandCharging.location;
        this.destination_band = mocDestinationBandCharging.destination_band;
        this.ctl1 = mocDestinationBandCharging.ctl1;
        this.ctl2 = mocDestinationBandCharging.ctl2;
        this.ctl3 = mocDestinationBandCharging.ctl3;
        this.ctl_details = mocDestinationBandCharging.ctl_details;
        this.iac = mocDestinationBandCharging.iac;
        this.timeband = mocDestinationBandCharging.timeband;
        this.charge_base = mocDestinationBandCharging.charge_base;
        this.charge_type = mocDestinationBandCharging.charge_type;
        this.rating_interval_name = mocDestinationBandCharging.rating_interval_name;
        this.rate = mocDestinationBandCharging.rate;
        this.fixed_charge = mocDestinationBandCharging.fixed_charge;
        this.applicable_taxes = mocDestinationBandCharging.applicable_taxes;
    }

    public static fromDTO(dto: any): MocDestinationBandCharging {
        return new MocDestinationBandCharging({ ...dto });
    }

    public static fromArray(mocDestinationBandChargings: Partial<MocDestinationBandCharging>[]): MocDestinationBandCharging[] {
        return mocDestinationBandChargings.map((mocDestinationBandCharging) => new MocDestinationBandCharging(mocDestinationBandCharging));
    }

    public static fromDTOArray(dtos: any[]): MocDestinationBandCharging[] {
        return dtos.map((dto) => MocDestinationBandCharging.fromDTO(dto));
    }
}