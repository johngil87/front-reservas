import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Areas} from '../../model/areas';
import {AreaService} from '../../services/area.service';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

public frmArea: FormGroup;
 displayedColumns:string[] = ['idArea', 'nomArea', 'IdSucursal'];
 areas= [];
 areaRts = Areas;
 datasource = new MatTableDataSource();
 editable: boolean;
 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private areaService: AreaService,
    private formBuilder: FormBuilder) {
      this.frmArea = new FormGroup({});
     }

    ngOnInit(): void {
      this.frmArea = this.formBuilder.group({
        nomArea: ['', Validators.required]
      });
      this.getArea();
      this.editable = false;
    }

    getArea(){
      this.areaService.getArea().subscribe(
        data => {
          this.datasource = new MatTableDataSource(data.data.deptos);
          this.datasource.paginator = this.paginator;
          this.areas = data.data.area;
        }
      );
      console.log(this.areas);
    }

    sendData(){
      if(this.frmArea.valid){
        let objDepto: any = {
          nomDepto: "string"
        }
        objDepto.nomDepto = this.frmArea.controls.nomArea.value;
        this.areaService.insertarArea(objDepto).subscribe(
          data =>{
            if(data.success){
              this.getArea();
              this.frmArea.reset();
              this.swal('Registro Correcto!!', 'success');
            }else{
              this.swal(data.messages[0], 'error');
            }
          }
        ), error => {
          this.swal(error, 'error');
        }
      }

    }

    swal(mensaje, icon){
      Swal.fire({
        position: 'center',
        icon: icon,
        title: mensaje,
        showConfirmButton: false,
        timer: 2000
      })
    }

    cancelar(){
      this.frmArea.reset();
    }

}
