import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

export enum INVITATION_TYPE {
    Single = 'Single',
    Couple = 'Couple',
    Famile = 'Famile'
}
export enum INVITATEE_CATEGORY {
    BridesRelative = 'BridesRelative',
    GroomsRelative = 'GroomsRelative',
    BridesCoWorkers = 'BridesCoWorkers',
    GroomsCoWorkers = 'GroomsCoWorkers',
    BridesColleagues = 'BridesColleagues',
    GroomsColleagues = 'GroomsColleagues',
    BridesFriends = 'BridesFriends',
    GroomsFriends = 'GroomsFriends',
    Other = 'Other'
}

@Entity('invitations')
export class Invitations {
    @Column({ primary: true, unique: true })
    id: string;
  
    @Column({ primary: true })
    name: string;
    
    @Column()
    attendance: boolean;
    
    @Column()
    ivitationLink: string;
    
    @Column()
    noOfAttendees: number;

    @Column() //single, couple, family
    invitationType: string;
    
    @Column() //bride-relative, groom-relative, bride-coworkors, groom-coworkors, bride-colleagues, groom-colleagues, bride-friends, groom-friends
    category: string;
  
    @UpdateDateColumn({ select: true })
    updatedAt?: Date;
  
    @CreateDateColumn({ select: true })
    createdAt?: Date;
  }