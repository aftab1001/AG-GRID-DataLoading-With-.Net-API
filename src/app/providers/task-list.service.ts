import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { RestApiService } from './base.service';
import {ItasklistParam} from '../modals/ITaskListParam'

@Injectable()
export class TaskListDetail {

   apiUrl = 'http://dummy.restapiexample.com/api/v1/employees';
    constructor(private _service: RestApiService) { }

    public loadTaskData = (): Observable<any> => {

  
        return this._service.get(this.apiUrl);

    }

}
