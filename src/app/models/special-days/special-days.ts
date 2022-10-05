export class SpecialDays {
    id: number | undefined;
    tadig: string | undefined;
    special_day_name: string | undefined;
    type: string | undefined;
    recurring_date: string | undefined;
    non_recurring: string | undefined;

    constructor(specialDays: Partial<SpecialDays>) {
        this.id = specialDays.id;
        this.tadig = specialDays.tadig;
        this.special_day_name = specialDays.special_day_name;
        this.type = specialDays.type;
        this.recurring_date = specialDays.recurring_date;
        this.non_recurring = specialDays.non_recurring;
    }

    public static fromDTO(dto: any): SpecialDays {
        return new SpecialDays({ ...dto });
    }

    public static fromArray(specialDays: Partial<SpecialDays>[]): SpecialDays[] {
        return specialDays.map((specialDay) => new SpecialDays(specialDay));
    }

    public static fromDTOArray(dtos: any[]): SpecialDays[] {
        return dtos.map((dto) => SpecialDays.fromDTO(dto));
    }
}