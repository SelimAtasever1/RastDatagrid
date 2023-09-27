import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserSocialMediaModel } from '../models/UserModel';
import { UserProfileService } from '../services/user-profile.service';

declare var $: any;

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit, OnDestroy {

    usersProfiles$: Observable<UserSocialMediaModel[]>;
    private userProfilesSubscription: Subscription;

    constructor(private userService: UserProfileService) {}

    ngOnInit(): void {
        this.usersProfiles$ = this.userService.userProfilesChanged.asObservable();

        this.userProfilesSubscription = this.usersProfiles$.subscribe(profiles => {
            this.initializeOrUpdateDataTable(profiles);
        });
    }

    initializeOrUpdateDataTable(profiles: UserSocialMediaModel[]): void {
        const tableElement = $('#myTable');
        if ($.fn.DataTable.isDataTable(tableElement)) {
            tableElement.DataTable().destroy();
        }
        
        setTimeout(() => {
            tableElement.DataTable();
        });
    }

    ngOnDestroy(): void {
        this.userProfilesSubscription.unsubscribe();
        $('#myTable').DataTable().destroy();
    }
}
