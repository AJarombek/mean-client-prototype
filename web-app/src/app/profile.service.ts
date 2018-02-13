import {EventEmitter, Injectable} from '@angular/core';
import {MockUserService} from "./mock/mock-user.service";

@Injectable()
export class ProfileService {

    public onData: EventEmitter<string> = new EventEmitter<string>();

    constructor(private userService: MockUserService) {}

    emitData(username: string) {
        this.userService.get(username).subscribe(res => {
            console.info(`Emitting User: ${JSON.stringify(res)}`);
            this.onData.emit(JSON.stringify(res));
        });
    }

}
