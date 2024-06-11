import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LawyersService } from 'src/app/lawyers.service';
@Component({
  selector: 'app-spacific-lawyer',
  templateUrl: './spacific-lawyer.component.html',
  styleUrls: ['./spacific-lawyer.component.scss']
})
export class SpacificLawyerComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _LawyersService: LawyersService) { }
  contactLawyer: boolean = false;
  id: number = 0;
  lawyer: any;
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (res) => {
        this.id = res['id'];
        }
    })

    this._LawyersService.getSpacificLawyer(this.id).subscribe({
      next: (res) => {
        this.lawyer = res;
      }
    })
  }

}
