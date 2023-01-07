import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faHtml5,faInstagram, faAngular, faCss3, faJs, faJava } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent {
  faCoffee = faCoffee;
  faGithub = faGithub;
  faHtml5 = faHtml5;
  faInstagram = faInstagram;
  faAngular = faAngular;
  faCss3 = faCss3;
  faJs = faJs;
  faJava = faJava;

}
