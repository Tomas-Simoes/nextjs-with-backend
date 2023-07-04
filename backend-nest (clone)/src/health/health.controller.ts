import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('Health')
export class HealthController {
  constructor(private readonly service: HealthService) {}

  @Get()
  health() {
    return this.service.health();
  }
}
