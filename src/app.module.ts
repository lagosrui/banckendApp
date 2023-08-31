import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProposalModule } from './proposal/proposal.module';
import {MongooseModule} from '@nestjs/mongoose'
require('dotenv').config()

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://lagosrui:' + process.env.MONGO + '@cluster0.lc4yfls.mongodb.net/funding-app?retryWrites=true&w=majority'),UserModule, ProposalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
