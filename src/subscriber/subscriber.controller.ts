import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { Public } from 'src/SkipAuth';
import { updateSubscriberDto } from './dto/update-subscriber.dto';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Public()
  @Post('create')
  create(@Body() createSubscriberDto: CreateSubscriberDto) {
    return this.subscriberService.registerNewUser(createSubscriberDto);
  }

  @Get()
  findAll() {
    return this.subscriberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriberService.findOne(+id);
  }

  @Public()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscriberDto: updateSubscriberDto,
  ) {
    return this.subscriberService.update(+id, updateSubscriberDto);
  }

  @Public()
  @Patch('password/:id')
  updatePassword(
    @Param('id') id: string,
    @Body() updateSubscriberDto: updateSubscriberDto,
  ) {
    return this.subscriberService.updatePassword(+id, updateSubscriberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriberService.remove(+id);
  }
}
