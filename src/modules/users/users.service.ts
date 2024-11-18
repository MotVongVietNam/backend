import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/upsert-users.dto';

@Injectable()
export class UsersService
  extends TypeOrmCrudService<User>
  implements OnModuleInit
{
  private readonly logger: Logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(User)
    public repository: Repository<User>,
  ) {
    super(repository);
  }

  onModuleInit() {
    this.logger.log('Init UsersService');
  }

  async findByUserName(username: string): Promise<User> {
    return this.repository.findOneBy({ username });
  }

  async create(dto: CreateUsersDto): Promise<User> {
    const existUser = await this.findByUserName(dto.username);

    if (existUser) {
      throw new BadRequestException({
        message: `User with user name ${dto.username} already exists`,
      });
    }

    const user = this.repository.create(dto);
    await user.save({ reload: true });
    return user;
  }
}