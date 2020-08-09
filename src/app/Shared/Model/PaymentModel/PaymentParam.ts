import { PaymentDetails } from "./PaymentDetails";
import { RedirectUrls } from "./RedirectUrls";
import { ReferenceDetails } from "./ReferenceDetails";

export class PaymentParam {
    merchant_id: number;
    merchant_key: string;
    production: boolean;
    url: string;
    paymentDetails: PaymentDetails;
    referenceDetails?: ReferenceDetails;
    redirectUrls?: RedirectUrls;
}
