export class DocumentHeader {
    id: number | undefined;
    tadig: string | undefined;
    iot_type: string | undefined;
    vpmn: string | undefined;
    hpmn: string | undefined;
    sender: string | undefined;
    recipient: string | undefined;
    file_type: string | undefined;
    effective_as_of: string | undefined;
    submission_date_and_time: string | undefined;
    iot_identifier: string | undefined;
    correction_sequence: string | undefined;
    type_of_change: string | undefined;
    publish_comment: string | undefined;
    internal_reference_id: string | undefined;
    raex_iot_schema_version: string | undefined;
    tadig_gen_schema_version: string | undefined;

    constructor(documentHeader: Partial<DocumentHeader>) {
        this.id = documentHeader.id;
        this.tadig = documentHeader.tadig;
        this.iot_type = documentHeader.iot_type;
        this.vpmn = documentHeader.vpmn;
        this.hpmn = documentHeader.hpmn;
        this.sender = documentHeader.sender;
        this.recipient = documentHeader.recipient;
        this.file_type = documentHeader.file_type;
        this.effective_as_of = documentHeader.effective_as_of;
        this.submission_date_and_time = documentHeader.submission_date_and_time;
        this.iot_identifier = documentHeader.iot_identifier;
        this.correction_sequence = documentHeader.correction_sequence;
        this.type_of_change = documentHeader.type_of_change;
        this.publish_comment = documentHeader.publish_comment;
        this.internal_reference_id = documentHeader.internal_reference_id;
        this.raex_iot_schema_version = documentHeader.raex_iot_schema_version;
        this.tadig_gen_schema_version = documentHeader.tadig_gen_schema_version;
    }

    public static fromDTO(dto: any): DocumentHeader {
        return new DocumentHeader({ ...dto });
    }

    public static fromArray(documentHeaders: Partial<DocumentHeader>[]): DocumentHeader[] {
        return documentHeaders.map((documentHeader) => new DocumentHeader(documentHeader));
    }

    public static fromDTOArray(dtos: any[]): DocumentHeader[] {
        return dtos.map((dto) => DocumentHeader.fromDTO(dto));
    }
}