import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navbar = [
    {
      name: 'Início',
      link: '/',
    },
    {
      name: 'Experiência',
      link: '/experiencia',
    },
    {
      name: 'Serviços',
      link: '/servicos',
    },
    {
      name: 'Projetos',
      link: '/projetos',
    },
    {
      name: 'Sobre',
      link: '/sobre',
    },
    {
      name: 'Freelancer',
      link: '/freelancer',
    },
    {
      name: 'Habilidades',
      link: '/habilidades',
    },
    {
      name: 'Educação',
      link: '/educacao',
    },
    {
      name: 'Contatos',
      link: '/contatos',
    }
  ];
}
