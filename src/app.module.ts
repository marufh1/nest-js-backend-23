import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/services/customers/customers.service';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [CustomersService],
})
export class AppModule {}
