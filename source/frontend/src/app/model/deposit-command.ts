import { NameValue } from './name-value';
import { PINValue } from './pin-value';
import { MoneyValue } from './money-value';
import { Account } from './account';

export class DepositCommand {
    constructor(
        public customerId: string,
        public accountId: string,
        public amount: number
    ) { }
}