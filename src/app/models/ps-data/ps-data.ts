export class PsData {
    id: number | undefined;
    tadig: string | undefined;
    normalized_volume_pricing_definition: string | undefined;
    location: string | undefined;
    apn_band: string | undefined;
    ctl1: string | undefined;
    ctl2: string | undefined;
    ctl3: string | undefined;
    ctl_details: string | undefined;
    

    constructor(psData: Partial<PsData>) {
        this.id = psData.id;
        this.tadig = psData.tadig;
        this.normalized_volume_pricing_definition = psData.normalized_volume_pricing_definition;
        this.location = psData.location;
        this.apn_band = psData.apn_band;
        this.ctl1 = psData.ctl1;
        this.ctl2 = psData.ctl2;
        this.ctl3 = psData.ctl3;
        this.ctl_details = psData.ctl_details;
    }

    public static fromDTO(dto: any): PsData {
        return new PsData({ ...dto });
    }

    public static fromArray(psDatas: Partial<PsData>[]): PsData[] {
        return psDatas.map((psData) => new PsData(psData));
    }

    public static fromDTOArray(dtos: any[]): PsData[] {
        return dtos.map((dto) => PsData.fromDTO(dto));
    }
}