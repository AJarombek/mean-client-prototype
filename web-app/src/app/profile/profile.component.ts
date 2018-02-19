import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from "../profile.service";
import {Subject} from "rxjs/Subject";
import {takeUntil} from "rxjs/operators";

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

    constructor(private profileService: ProfileService, private ngZone: NgZone) {}

    ngOnInit(): void {
        this.profileService.onData.pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
            console.info(`${this.LOG_TAG} Receiving User ${res}`);

            setTimeout(() => {
                this.user = JSON.parse(res);
                console.info(`${this.LOG_TAG} ${this.user.first}`);
            }, 1000);

        });
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
