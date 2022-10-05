export class PsDataRatingInterval {
    id: number | undefined;
    tadig: string | undefined;
    service: string | undefined;
    rating_interval_type: string | undefined;
    rating_interval_name: string | undefined;
    interval_length: string | undefined;
    repetition_factor: string | undefined;
    initial_period_not_charged: string | undefined;

    

    constructor(psDataRatingInterval: Partial<PsDataRatingInterval>) {
        this.id = psDataRatingInterval.id;
        this.tadig = psDataRatingInterval.tadig;
        this.service = psDataRatingInterval.service;
        this.rating_interval_type = psDataRatingInterval.rating_interval_type;
        this.rating_interval_name = psDataRatingInterval.rating_interval_name;
        this.interval_length = psDataRatingInterval.interval_length;
        this.repetition_factor = psDataRatingInterval.repetition_factor;
        this.initial_period_not_charged = psDataRatingInterval.initial_period_not_charged;
    }

    public static fromDTO(dto: any): PsDataRatingInterval {
        return new PsDataRatingInterval({ ...dto });
    }

    public static fromArray(psDataRatingIntervals: Partial<PsDataRatingInterval>[]): PsDataRatingInterval[] {
        return psDataRatingIntervals.map((psDataRatingInterval) => new PsDataRatingInterval(psDataRatingInterval));
    }

    public static fromDTOArray(dtos: any[]): PsDataRatingInterval[] {
        return dtos.map((dto) => PsDataRatingInterval.fromDTO(dto));
    }
}