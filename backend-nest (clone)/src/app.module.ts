import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://simoes:simoes12345@cluster0.qksi9tv.mongodb.net/todoapp?retryWrites=true&w=majority',
    ),
    TodoModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
