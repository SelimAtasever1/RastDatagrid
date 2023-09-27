import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';
import {TuiDialogFormService} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import { UserProfileService } from '../services/user-profile.service';
import { UserSocialMediaModel } from '../models/UserModel';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'app-add-new-account',
    templateUrl: './add-new-account.component.html',
    styleUrls: ['./add-new-account.component.scss'],
    providers: [TuiDialogFormService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewAccountComponent {
    value = '';
    dialogInstance: any;

    socialMediaLink: string = '';
    platformName: string = '';
    description: string = '';

    constructor(
        @Inject(TuiDialogFormService) private readonly dialogForm: TuiDialogFormService,
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        private userProfileService: UserProfileService,
        @Inject(TuiAlertService) private readonly alerts: TuiAlertService
    ) {}

    addNewAccount() {
        if (!this.socialMediaLink || !this.platformName || !this.description) {
            this.showNotification('Hata', 'Tüm alanları doldurunuz.', 'error');
            return;
        }
    
        const newAccount = new UserSocialMediaModel(this.socialMediaLink, this.platformName, this.description);
        this.userProfileService.AddUserProfile(newAccount);
    
        this.socialMediaLink = '';
        this.platformName = '';
        this.description = '';
    
        this.showNotification('İşlem Başarılı', 'Yeni hesap eklendi!');
        this.closeDialog();
    }
    

    showNotification(message: string, label: string, status: 'success' | 'error' = 'success'): void {
        this.alerts.open(message, {
            label: label,
            status: status,
            autoClose: true
        }).subscribe();
    }
    
    
    onModelChange(value: string): void {
        this.value = value;
        this.dialogForm.markAsDirty();
    }

    onClick(content: PolymorpheusContent): void {

        this.socialMediaLink = '';
        this.platformName = '';
        this.description = '';
    
        const closeable = this.dialogForm.withPrompt({
            label: 'Emin misiniz?',
            data: {
                content: 'Verileriniz <strong>kaybolacak</strong>',
            }
        });
    
        this.dialogInstance = this.dialogs.open(content, {closeable, dismissible: closeable}).subscribe({
            complete: () => {
                this.value = '';
                this.dialogForm.markAsPristine();
            },
        });
    }
    
    closeDialog(): void {
        if (this.dialogInstance) {
            this.dialogInstance.unsubscribe();
        }
    }
}
