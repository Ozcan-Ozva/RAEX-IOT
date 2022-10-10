export class MtcChargedReciprocatingRatingInterval {
    id: number | undefined;
    tadig: string | undefined;
    service: string | undefined;
    rating_interval_type: string | undefined;
    rating_interval_name: string | undefined;
    interval_length: string | undefined;
    repetition_factor: string | undefined;
    initial_period_not_charged: string | undefined;

    constructor(mtcChargedReciprocatingRatingInterval: Partial<MtcChargedReciprocatingRatingInterval>) {
        this.id = mtcChargedReciprocatingRatingInterval.id;
        this.tadig = mtcChargedReciprocatingRatingInterval.tadig;
        this.service = mtcChargedReciprocatingRatingInterval.service;
        this.rating_interval_type = mtcChargedReciprocatingRatingInterval.rating_interval_type;
        this.rating_interval_name = mtcChargedReciprocatingRatingInterval.rating_interval_name;
        this.interval_length = mtcChargedReciprocatingRatingInterval.interval_length;
        this.repetition_factor = mtcChargedReciprocatingRatingInterval.repetition_factor;
        this.initial_period_not_charged = mtcChargedReciprocatingRatingInterval.initial_period_not_charged;
    }

    public static fromDTO(dto: any): MtcChargedReciprocatingRatingInterval {
        return new MtcChargedReciprocatingRatingInterval({ ...dto });
    }

    public static fromArray(mtcChargedReciprocatingRatingIntervals: Partial<MtcChargedReciprocatingRatingInterval>[]): MtcChargedReciprocatingRatingInterval[] {
        return mtcChargedReciprocatingRatingIntervals.map((mtcChargedReciprocatingRatingInterval) => new MtcChargedReciprocatingRatingInterval(mtcChargedReciprocatingRatingInterval));
    }

    public static fromDTOArray(dtos: any[]): MtcChargedReciprocatingRatingInterval[] {
        return dtos.map((dto) => MtcChargedReciprocatingRatingInterval.fromDTO(dto));
    }
}