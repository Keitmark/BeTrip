import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private service:MainService) { }
  
    ngOnInit() {
      this.service.onPageChange$.next(false);
    }

}
