import { Module } from '@nestjs/common';
import { InvitationController } from './controllers/invitation.controller';
import { InvitationService } from './services/invitation.service';

@Module({
  controllers: [InvitationController],
  providers: [InvitationService]
})
export class InvitationModule {}
