import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/_database/prisma.service';
// import { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    private readonly logger: Logger,
    private readonly jwtService: JwtService,
  ) {}

  // usar o dto aqui não parece ser o mais correto, mas é um mal que estou
  async createPost(post: any) {
    const result = await this.prisma.post.create({
      data: { ...post, lessorId: 'asd' },
    });
    return result;
  }

  async getPost() {}

  async updatePost() {}

  async deletePost() {}
}
