
export class UserSocialMediaModel {
    public socialMediaLink: string;       
    public platformName: string;          
    public description: string;           

    constructor(socialMediaLink: string, platformName: string, description: string) {
        this.socialMediaLink = socialMediaLink;
        this.platformName = platformName;
        this.description = description;
    }
}
