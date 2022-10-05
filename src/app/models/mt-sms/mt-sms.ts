export class MtSms {
    id: number | undefined;
    tadig: string | undefined;
    charging: string | undefined;
    location: string | undefined;
    timeband: string | undefined;
    fixed_charge: string | undefined;
    applicable_taxes: string | undefined;
    reciprocal_description: string | undefined;

    

    constructor(mtSms: Partial<MtSms>) {
        this.id = mtSms.id;
        this.tadig = mtSms.tadig;
        this.charging = mtSms.charging;
        this.location = mtSms.location;
        this.timeband = mtSms.timeband;
        this.fixed_charge = mtSms.fixed_charge;
        this.applicable_taxes = mtSms.applicable_taxes;
        this.reciprocal_description = mtSms.reciprocal_description;
    }

    public static fromDTO(dto: any): MtSms {
        return new MtSms({ ...dto });
    }

    public static fromArray(mtSmses: Partial<MtSms>[]): MtSms[] {
        return mtSmses.map((mtSms) => new MtSms(mtSms));
    }

    public static fromDTOArray(dtos: any[]): MtSms[] {
        return dtos.map((dto) => MtSms.fromDTO(dto));
    }
}