/* tslint:disable:no-unused-variable */

import {inject, TestBed, async, getTestBed} from '@angular/core/testing';
import {ProjectService} from './project.service';
import {MockBackend, MockConnection} from "@angular/http/testing";
import {ResponseOptions, Response, BaseRequestOptions, Http, XHRBackend, HttpModule} from "@angular/http";

describe('Service: Project', () => {
  let  mockBackend;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      providers: [
        ProjectService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        }
      ],
      imports: [
        HttpModule
      ]
    });

    mockBackend = getTestBed().get(MockBackend);
  }));

  it('should get blogs async',
    async(inject([ProjectService], (blogService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    id: 1,
                    name: 'Project 1'
                  }]
              }
            )));
        });

      blogService.getProjects().subscribe(
        (data) => {
          expect(data.length).toBe(1);
          expect(data[0].id).toBe(1);
          expect(data[0].name).toBe('Project 1');
        });
    })));

});
