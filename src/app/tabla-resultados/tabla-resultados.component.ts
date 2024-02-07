import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TablaResultadosDataSource, TablaResultadosItem } from './tabla-resultados-datasource';

@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class TablaResultadosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaResultadosItem>;
  dataSource = new TablaResultadosDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'name2', 'name3', 'name4'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
