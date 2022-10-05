export class ChargingPolicy {
    id: number | undefined;
    tadig: string | undefined;
    policy: string | undefined;
    state: string | undefined;
    

    constructor(chargingPolicy: Partial<ChargingPolicy>) {
        this.id = chargingPolicy.id;
        this.tadig = chargingPolicy.tadig;
        this.policy = chargingPolicy.policy;
        this.state = chargingPolicy.state;
    }

    public static fromDTO(dto: any): ChargingPolicy {
        return new ChargingPolicy({ ...dto });
    }

    public static fromArray(chargingPolicies: Partial<ChargingPolicy>[]): ChargingPolicy[] {
        return chargingPolicies.map((chargingPolicy) => new ChargingPolicy(chargingPolicy));
    }

    public static fromDTOArray(dtos: any[]): ChargingPolicy[] {
        return dtos.map((dto) => ChargingPolicy.fromDTO(dto));
    }
}