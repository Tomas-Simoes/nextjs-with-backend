import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  health(): Object {
    return { status: 'Nest.js CLONE server is healthy.' };
  }
}
