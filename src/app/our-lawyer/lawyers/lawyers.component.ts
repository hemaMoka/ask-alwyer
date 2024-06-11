import { Component, OnInit } from '@angular/core';
import { LawyersService } from 'src/app/lawyers.service';
@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.scss']
})
export class LawyersComponent implements OnInit {
  constructor(private _LawyersService:LawyersService){}
  lawyers: any[]=[];
  ngOnInit(): void {
    this._LawyersService.getLawyers().subscribe({
      next: (res) => {
        this.lawyers = res;
        }
      })
  }
}
