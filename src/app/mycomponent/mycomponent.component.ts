// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-mycomponent',
//   templateUrl: './mycomponent.component.html',
//   styleUrls: ['./mycomponent.component.css']
// })
// export class MycomponentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, ViewEncapsulation } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class MycomponentComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
