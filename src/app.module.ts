import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './libs/database/database.module';
import { JobsModule } from './features/jobs/jobs.module';
import { AuthModule } from './features/auth/auth.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`,
    }),

    DatabaseModule,

    AuthModule,
    UsersModule,
    JobsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
