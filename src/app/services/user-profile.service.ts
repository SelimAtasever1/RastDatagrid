import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserSocialMediaModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})

export class UserProfileService {
    constructor() { }

    private userProfiles: UserSocialMediaModel[] = [
        new UserSocialMediaModel('instagram/joedoe', 'Instagram', 'A platform to share personal and business posts.'),
        new UserSocialMediaModel('facebook/joedoe', 'Facebook', 'A global social platform to connect with friends and family.'),
        new UserSocialMediaModel('twitter/joedoe', 'Twitter', 'Share your thoughts in short bursts.'),
        new UserSocialMediaModel('linkedin/joedoe', 'LinkedIn', 'Connect professionally and expand your network.'),
        new UserSocialMediaModel('snapchat/joedoe', 'Snapchat', 'Share moments with self-destructive photos and videos.'),
    ];

    userProfilesChanged = new BehaviorSubject<UserSocialMediaModel[]>(this.userProfiles.slice());

    GetUsersProfiles(): UserSocialMediaModel[] {
      return this.userProfiles.slice();
    }

    AddUserProfile(userProfile: UserSocialMediaModel) {
      this.userProfiles.push(userProfile);
      this.userProfilesChanged.next(this.userProfiles.slice());
    }


}

