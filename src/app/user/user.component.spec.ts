import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { User } from './user';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const user: User = { id: 2, name: 'Jerry', email: 'a@b.com', role: 'admin', department: 'Sales', contact: '111' };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected event when clicked', () => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;

    component.deleteEvent.subscribe((selectedUser: number) => expect(selectedUser).toBe(1));
    component.deleteUser(1);
  });

});
