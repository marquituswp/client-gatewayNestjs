import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderItemDto } from '.';

export class CreateOrderDto {
  // CREACION ANTERIOR DE LA BASE DE DATOS
  // @IsNumber()
  // @IsPositive()
  // totalAmout: number;

  // @IsNumber()
  // @IsPositive()
  // totalItems: number;

  // @IsEnum(OrderStatusList, {
  //   message: `Possible status value are ${Object.values(OrderStatusList).join(', ')}`,
  // })
  // @IsOptional()
  // status: OrderStatus = OrderStatus.PENDING;

  // @IsBoolean()
  // @IsOptional()
  // paid: boolean = false;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
