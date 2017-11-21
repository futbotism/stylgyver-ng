import { StyleguideService } from '../styleguide.service';
import { Http } from '@angular/http';
import { CastMember } from '../../shared/models/cast-member.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  macgyverCast: CastMember[] = [];
  styleguideMeta;

  constructor(
    private styleguideService: StyleguideService
  ) {
  }

  ngOnInit() {
    this.styleguideService.styleguideMeta.subscribe(styleguideMeta => this.styleguideMeta = styleguideMeta);
    this.setMacgyverList();
  }

  setMacgyverList() {
    // tslint:disable:max-line-length
    this.macgyverCast = [
      {
        name: 'Richard Anderson',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTY2MzM5N15BMl5BanBnXkFtZTcwMzYxMTAwNA@@._V1_UX32_CR0,0,32,44_AL_.jpg',
        description: 'Richard ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      },
      {
        name: 'Dana Elcar',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5NjkwMzc4Nl5BMl5BanBnXkFtZTcwNTY1MTYxOA@@._V1_UX32_CR0,0,32,44_AL_.jpg',
        description: 'Dana ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      },
      {
        name: 'Bruce McGill',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4NDk0MDY2Nl5BMl5BanBnXkFtZTYwMjA3MTU0._V1_UX32_CR0,0,32,44_AL_.jpg',
        description: 'Bruce ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      },
      {
        name: 'Robin Mossley',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMzk0MTMzN15BMl5BanBnXkFtZTYwMTk2NTAz._V1_UY44_CR17,0,32,44_AL_.jpg',
        description: 'Robin ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      },
      {
        name: 'Elyssa Davalos',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4MDUxMDQzOV5BMl5BanBnXkFtZTgwNjc5MDY1MTE@._V1_UX32_CR0,0,32,44_AL_.jpg',
        description: 'Elyssa ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      },
      {
        name: 'Michael Des Barres',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNTE5MTQ3MF5BMl5BanBnXkFtZTgwNDQ3MDE5NTE@._V1_UX32_CR0,0,32,44_AL_.jpg',
        description: 'Michael ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      },
      {
        name: 'Susan Chapple',
        image: 'http://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB514891992_.png',
        description: 'Susan ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      },
      {
        name: 'Teri Hatcher',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwODU5ODE3OV5BMl5BanBnXkFtZTcwNjY5MjEyNQ@@._V1_UX32_CR0,0,32,44_AL_.jpg',
        description: 'Teri ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      },
      {
        name: 'John Anderson',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NTk2NDUyNF5BMl5BanBnXkFtZTcwNzQ3MjYwOA@@._V1_UX32_CR0,0,32,44_AL_.jpg',
        description: 'John ipsum dolor sit amet, consectetur adipiscing elit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Duo Reges: constructio interrete.'
      }
    ];
  }
}
