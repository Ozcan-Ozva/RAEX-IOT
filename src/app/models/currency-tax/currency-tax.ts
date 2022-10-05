export class CurrencyTax {
    id: number | undefined;
    tadig: string | undefined;
    iot_currency: string | undefined;
    tax_name: string | undefined;
    tax_is_vat: string | undefined;
    tax_can_be_recovered: string | undefined;
    apply_tax_by_default: string | undefined;
    tax_type: string | undefined;
    rate_type: string | undefined;
    tax_rate: string | undefined;
    tax_on_tax: string | undefined;
    vpmn_markup: string | undefined;
    

    constructor(currencyTax: Partial<CurrencyTax>) {
        this.id = currencyTax.id;
        this.tadig = currencyTax.tadig;
        this.iot_currency = currencyTax.iot_currency;
        this.tax_name = currencyTax.tax_name;
        this.tax_is_vat = currencyTax.tax_is_vat;
        this.tax_can_be_recovered = currencyTax.tax_can_be_recovered;
        this.apply_tax_by_default = currencyTax.apply_tax_by_default;
        this.tax_type = currencyTax.tax_type;
        this.rate_type = currencyTax.rate_type;
        this.tax_rate = currencyTax.tax_rate;
        this.tax_on_tax = currencyTax.tax_on_tax;
        this.vpmn_markup = currencyTax.vpmn_markup;
    }

    public static fromDTO(dto: any): CurrencyTax {
        return new CurrencyTax({ ...dto });
    }

    public static fromArray(currencyTaxs: Partial<CurrencyTax>[]): CurrencyTax[] {
        return currencyTaxs.map((currencyTax) => new CurrencyTax(currencyTax));
    }

    public static fromDTOArray(dtos: any[]): CurrencyTax[] {
        return dtos.map((dto) => CurrencyTax.fromDTO(dto));
    }
}