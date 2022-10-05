export class ApnBands {
    id: number | undefined;
    tadig: string | undefined;
    apn_band_name: string | undefined;
    apns: string | undefined;
    

    constructor(apnBands: Partial<ApnBands>) {
        this.id = apnBands.id;
        this.tadig = apnBands.tadig;
        this.apn_band_name = apnBands.apn_band_name;
        this.apns = apnBands.apns;
    }

    public static fromDTO(dto: any): ApnBands {
        return new ApnBands({ ...dto });
    }

    public static fromArray(apnBands: Partial<ApnBands>[]): ApnBands[] {
        return apnBands.map((apnBand) => new ApnBands(apnBand));
    }

    public static fromDTOArray(dtos: any[]): ApnBands[] {
        return dtos.map((dto) => ApnBands.fromDTO(dto));
    }
}