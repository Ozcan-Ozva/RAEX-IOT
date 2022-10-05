export class MocRatingInterval {
    id: number | undefined;
    tadig: string | undefined;
    service: string | undefined;
    rating_interval_type: string | undefined;
    rating_interval_name: string | undefined;
    interval_length: string | undefined;
    repetition_factor: string | undefined;
    initial_period_not_charged: string | undefined;

    constructor(mocRatingInterval: Partial<MocRatingInterval>) {
        this.id = mocRatingInterval.id;
        this.tadig = mocRatingInterval.tadig;
        this.service = mocRatingInterval.service;
        this.rating_interval_type = mocRatingInterval.rating_interval_type;
        this.rating_interval_name = mocRatingInterval.rating_interval_name;
        this.interval_length = mocRatingInterval.interval_length;
        this.repetition_factor = mocRatingInterval.repetition_factor;
        this.initial_period_not_charged = mocRatingInterval.initial_period_not_charged;
    }

    public static fromDTO(dto: any): MocRatingInterval {
        return new MocRatingInterval({ ...dto });
    }

    public static fromArray(mocRatingIntervals: Partial<MocRatingInterval>[]): MocRatingInterval[] {
        return mocRatingIntervals.map((mocRatingInterval) => new MocRatingInterval(mocRatingInterval));
    }

    public static fromDTOArray(dtos: any[]): MocRatingInterval[] {
        return dtos.map((dto) => MocRatingInterval.fromDTO(dto));
    }
}