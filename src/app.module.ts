import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PropertyModule} from './property/property.module'
import { TestModule } from './test/test.module';
import { ItemModule } from './item/item.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PropertyModule,TestModule, ItemModule,
    ConfigModule.forRoot({envFilePath:'.env',isGlobal:true}),
    MongooseModule.forRoot(process.env.DB_URL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
