import {Component, NgZone} from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    public postCount: number;
    public user: any = {first: 'hey', last: 'yo'};

    constructor(private profileService: ProfileService, private ngZone: NgZone) {
        profileService.onData.subscribe(res => {
            console.info(`Receiving User ${res}`);
            this.user = JSON.parse(res);
            console.info(this.user.first);
        });
    }

}
