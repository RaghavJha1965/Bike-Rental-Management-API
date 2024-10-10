import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';

@ApiTags('bikes')
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of all bikes' })
  findAll() {
    return this.bikesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get details of a specific bike by ID' })
  findOne(@Param('id') id: string) {
    return this.bikesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new bike entry in the library' })
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.create(createBikeDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a specific bike by ID' })
  update(@Param('id') id: string, @Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.update(id, createBikeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific bike by ID' })
  remove(@Param('id') id: string) {
    return this.bikesService.remove(id);
  }
}
