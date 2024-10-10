import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from './entities/bike.entity';
import { CreateBikeDto } from './dto/create-bike.dto';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike) // Inject the Bike repository
    private readonly bikeRepository: Repository<Bike>,
  ) {}

  findAll(): Promise<Bike[]> {
    return this.bikeRepository.find();
  }

  findOne(id: string): Promise<Bike> {
    return this.bikeRepository.findOne({ where: { id } });
  }

  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = this.bikeRepository.create(createBikeDto);
    return this.bikeRepository.save(bike);
  }

  async update(id: string, updateBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = await this.bikeRepository.preload({
      id,
      ...updateBikeDto,
    });
    if (!bike) {
      throw new NotFoundException(`Bike #${id} not found`);
    }
    return this.bikeRepository.save(bike);
  }

  async remove(id: string): Promise<void> {
    const bike = await this.findOne(id);
    if (!bike) {
      throw new NotFoundException(`Bike #${id} not found`);
    }
    await this.bikeRepository.remove(bike);
  }
}
