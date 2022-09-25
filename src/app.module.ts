import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`)]
})
export class AppModule {}
