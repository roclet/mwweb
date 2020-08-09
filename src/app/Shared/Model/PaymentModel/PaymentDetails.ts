export class PaymentDetails {
    amount: number | null;
    item_name: string | null;
    item_description?: string;
    currency?: string;
    payment_method?: string;
    name_first?: string;
    name_last?: string;
    email_address?: string;
    cell_number?: string;
}