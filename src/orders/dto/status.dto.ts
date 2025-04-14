import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Possible status value are ${Object.values(OrderStatusList).join(', ')}`,
  })
  status: OrderStatus;
}
