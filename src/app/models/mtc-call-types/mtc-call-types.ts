export class MtcCallTypes {
    id: number | undefined;
    tadig: string | undefined;
    normalized_pricing_definition: string | undefined;
    services: string | undefined;
    location: string | undefined;
    

    constructor(mtcCallTypes: Partial<MtcCallTypes>) {
        this.id = mtcCallTypes.id;
        this.tadig = mtcCallTypes.tadig;
        this.normalized_pricing_definition = mtcCallTypes.normalized_pricing_definition;
        this.services = mtcCallTypes.services;
        this.location = mtcCallTypes.location;
    }

    public static fromDTO(dto: any): MtcCallTypes {
        return new MtcCallTypes({ ...dto });
    }

    public static fromArray(mtcCallTypes: Partial<MtcCallTypes>[]): MtcCallTypes[] {
        return mtcCallTypes.map((mtcCallType) => new MtcCallTypes(mtcCallType));
    }

    public static fromDTOArray(dtos: any[]): MtcCallTypes[] {
        return dtos.map((dto) => MtcCallTypes.fromDTO(dto));
    }
}