export class TimeBands {
    id: number | undefined;
    tadig: string | undefined;
    timeband_name: string | undefined;
    start_time: string | undefined;
    end_time: string | undefined;
    weekdays: string | undefined;
    special_days: string | undefined;
    

    constructor(timeBands: Partial<TimeBands>) {
        this.id = timeBands.id;
        this.tadig = timeBands.tadig;
        this.timeband_name = timeBands.timeband_name;
        this.start_time = timeBands.start_time;
        this.end_time = timeBands.end_time;
        this.weekdays = timeBands.weekdays;
        this.special_days = timeBands.special_days;
    }

    public static fromDTO(dto: any): TimeBands {
        return new TimeBands({ ...dto });
    }

    public static fromArray(timeBands: Partial<TimeBands>[]): TimeBands[] {
        return timeBands.map((timeBand) => new TimeBands(timeBand));
    }

    public static fromDTOArray(dtos: any[]): TimeBands[] {
        return dtos.map((dto) => TimeBands.fromDTO(dto));
    }
}