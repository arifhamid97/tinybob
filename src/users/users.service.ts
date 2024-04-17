import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return  this.prisma.user.create({
      data,
      include: {
        posts: true,
      },
    });

  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include:{
        posts:true
      }
    });
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
      include:{
        posts:true
      }
    });
  }

  async update(id: number, data: Prisma.UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
