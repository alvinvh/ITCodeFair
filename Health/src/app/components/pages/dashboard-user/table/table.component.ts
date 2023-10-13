import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
    @Input() title = '';
    @Input() data: any;
    @Input() header: any;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    searchValue = '';
    listData: any;
    constructor(private _liveAnnouncer: LiveAnnouncer) {}
    tableFilter() {
        this.data.filter = this.searchValue.trim().toLocaleLowerCase();
    }
    ngAfterViewInit(): void {
        this.header.push('Action');
        this.data = new MatTableDataSource(this.data);
        this.data.sort = this.sort;
        this.data.paginator = this.paginator;
    }
    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}
