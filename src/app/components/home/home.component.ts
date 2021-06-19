import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { GridOptions } from 'ag-grid-community';
import { Message } from '../messages/message.component';
import { TaskListDetail } from 'src/app/providers/task-list.service'; 

@Component({
  selector: 'humanfoucus-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home implements OnInit {
 
  gridOptions: GridOptions = {
    rowSelection: 'single',
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    animateRows: true,
    paginationAutoPageSize: false,
    paginationPageSize: 50,
  };
  columnDefs = [

 
    { headerName: 'Employee Name', field: 'employee_name', width: 400, editable: true },
    { headerName: 'Employee Age', field: 'employee_age', editable: true, width: 400 },
    { headerName: 'Employee Salary', field: 'employee_salary', width: 400, editable: true }

  ];

  rowData = [];
  constructor(private _taskService: TaskListDetail,
    private _toastr: MatSnackBar
  ) { }

  ngOnInit() {
    this.LoadTaskList();
  }
  public LoadTaskList() {
      this._taskService.loadTaskData()
        .subscribe((data: any) => {
          if (data) {
           this.rowData = data;     
          }
        });
    }

  onGridReady(params) {
    let gridApi = params.api;
    gridApi.showLoadingOverlay()
    gridApi.setHeaderHeight(30);
  }

  handleError(error): void {
    this._toastr.open(error, Message.Error.ServerError, {
      duration: 2000,
      panelClass: ['red-snackbar']
    });
  }

}







