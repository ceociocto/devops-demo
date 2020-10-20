import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';


export class UserData implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 1, name: 'Tom', email: 'tom@gmail.com', role: 'admin', department: 'HR', contact: '0000000000' },
      { id: 2, name: 'Jerry', email: 'jerry@gmail.com', role: 'manager', department: 'HR', contact: '1111111111' },
      { id: 3, name: 'Michael', email: 'michael@yahoo.com', role: 'assist', department: 'PMO', contact: '2222222222' },
      { id: 4, name: 'Jane', email: 'jane@live.com', role: 'employee', department: 'IT', contact: '6666666666' },
      { id: 5, name: 'Jone', email: 'jone@super.com', role: 'guest', department: 'WWW', contact: '9909999999' }

    ];
    return { users };
  }
}
