import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from "../profile.service";
import {Subject} from "rxjs/Subject";
import {takeUntil} from "rxjs/operators";
import {LoadedService} from "../loaded.service";

/**
 * Component for the profile page.
 * @author Andrew Jarombek
 * @since 2/17/2018
 */

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

    public postCount: number;
    public user: any = {first: 'hey', last: 'yo'};

    private ngUnsubscribe: Subject<any> = new Subject();
    private LOG_TAG: string = '[Profile.Component]';

    constructor(private profileService: ProfileService, private loadedService: LoadedService) {}

    ngOnInit(): void {
        this.profileService.onData.pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
            console.info(`${this.LOG_TAG} Receiving User ${res}`);

            this.user = JSON.parse(res);
        });

        // Notify Loaded Service Subscribers (AppComponent) that the Profile Component is laoded
        const component = 'profile';
        console.info(`${this.LOG_TAG} Emitted Component Loaded Notification: ${component}`);
        this.loadedService.emitData(component);
    }

    /**
     * Unsubscribe from the profile service when the component is destroyed.
     */
    ngOnDestroy(): void {
        console.info(`${this.LOG_TAG} OnDestroy() called for Profile Component`);
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
