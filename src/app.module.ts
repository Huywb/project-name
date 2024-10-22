import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PropertyModule} from './property/property.module'
import { TestModule } from './test/test.module';

@Module({
  imports: [PropertyModule,TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
