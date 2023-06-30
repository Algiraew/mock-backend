import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [AuthModule, PrismaModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
