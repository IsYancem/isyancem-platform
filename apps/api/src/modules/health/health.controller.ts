import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Validate API health status' })
  getHealth() {
    return {
      status: 'ok',
      service: 'ISYANCEM API',
      timestamp: new Date().toISOString(),
    };
  }
}