import { TestBed } from '@angular/core/testing';
import { 
	HttpClientTestingModule, 
	HttpTestingController 
} from '@angular/common/http/testing';

import { UsersService } from './users.service';

fdescribe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;
  // let httpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController)
        
  });

  afterEach(() => { 
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get response should match the right data', () => {
        const mockUsers = [
          { name: 'Jose Perez', email: 'pepe@sample.com'},
          { name: 'Elena Martín', email: 'elena@chess.com'}
        ];

       service.getAll()
          .subscribe( (usersData: any) => {

            expect(usersData[0].name).toEqual('Jose Perez');
            expect(usersData[0].email).toEqual(
              'pepe@sample.com');
            
            expect(usersData[1].name).toEqual('Elena Martín');
            expect(usersData[1].email).toEqual(
              'elena@chess.com');
          });

       const req = httpMock.expectOne(
           'https://jsonplaceholder.typicode.com/users'
        );
        expect(req.request.method).toEqual('GET');
        req.flush(mockUsers);
      });
    

});
