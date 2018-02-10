import { TestBed, inject } from '@angular/core/testing';

import {MockUserService} from "./mock-user.service";
import {User} from "../models/user";

/**
 * Test suite for the MockUserService
 * @author Andrew Jarombek
 * @since 2/10/2018
 */

describe('MockUserService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MockUserService]
        });
    });

    it('service should be created', inject([MockUserService], (service: MockUserService) => {
        expect(service).toBeTruthy();
    }));

    it("getAll() should get two users", inject([MockUserService], (service: MockUserService) => {
        service.getAll().subscribe(users => {
            expect(users.length).toBe(2);
        });
    }));

    it("get() should get user 'andy'", inject([MockUserService], (service: MockUserService) => {
        service.get("andy").subscribe(user => {
            expect(user.username).toBe('andy');
            expect(user.first).toBe('Andrew');
            expect(user.last).toBe('Jarombek');
        });
    }));

    it("post() should return new user", inject([MockUserService], (service: MockUserService) => {
        service.post(new User("joe", "Joe", "Smith")).subscribe(user => {
            expect(user.username).toBe('joe');
            expect(user.first).toBe('Joe');
            expect(user.last).toBe('Smith');
        });
    }));

    it("post() should return error when null", inject([MockUserService], (service: MockUserService) => {
        service.post(null).subscribe(user => {
            expect(user).toBeFalsy();
        }, error => {
            expect(error).toBe("Invalid User Entered");
        });
    }));

    it("post() should return error when undefined", inject([MockUserService], (service: MockUserService) => {
        service.post(undefined).subscribe(user => {
            expect(user).toBeFalsy();
        }, error => {
            expect(error).toBe("Invalid User Entered");
        });
    }));

    it("put() should return the user entered", inject([MockUserService], (service: MockUserService) => {
        service.put(new User("tom", "Thomas", "Caulfield")).subscribe(user => {
            expect(user.username).toBe('tom');
            expect(user.first).toBe('Thomas');
            expect(user.last).toBe('Caulfield');
        });
    }));

    it("patch() should fail to patch", inject([MockUserService], (service: MockUserService) => {
        service.patch("andy", {first:"andy"}).subscribe(user => {
            expect(user).toBeFalsy();
        }, error => {
            expect(error).toBe("No User matches Username");
        });
    }));

    it("delete() should return delete success", inject([MockUserService], (service: MockUserService) => {
        service.delete("andy").subscribe(result => {
            expect(result).toBe("Delete User Success!");
        });
    }));
});
