import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {

    constructor(private customerService: CustomersService) {}

    @Get('')
    getCustomers() {
        return this.customerService.findCustomers();
    }
}
