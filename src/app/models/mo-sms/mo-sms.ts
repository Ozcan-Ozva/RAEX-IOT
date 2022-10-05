export class MoSms {
    id: number | undefined;
    tadig: string | undefined;
    location: string | undefined;
    destination_band: string | undefined;
    ctl1: string | undefined;
    ctl2: string | undefined;
    ctl3: string | undefined;
    ctl_details: string | undefined;
    timeband: string | undefined;
    fixed_charge: string | undefined;
    applicable_taxes: string | undefined;

    

    constructor(moSms: Partial<MoSms>) {
        this.id = moSms.id;
        this.tadig = moSms.tadig;
        this.location = moSms.location;
        this.destination_band = moSms.destination_band;
        this.ctl1 = moSms.ctl1;
        this.ctl2 = moSms.ctl2;
        this.ctl3 = moSms.ctl3;
        this.ctl_details = moSms.ctl_details;
        this.timeband = moSms.timeband;
        this.fixed_charge = moSms.fixed_charge;
        this.applicable_taxes = moSms.applicable_taxes;
    }

    public static fromDTO(dto: any): MoSms {
        return new MoSms({ ...dto });
    }

    public static fromArray(moSmses: Partial<MoSms>[]): MoSms[] {
        return moSmses.map((moSms) => new MoSms(moSms));
    }

    public static fromDTOArray(dtos: any[]): MoSms[] {
        return dtos.map((dto) => MoSms.fromDTO(dto));
    }
}