import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  games$: Game[] = [
    {
      title: 'Assassin’s Creed® II',
      description: 'Η προσπάθεια μας για την προσθήκη ελληνικών συνεχίζεται, αυτή την φορά ξεκινάμε με την τριλογία του Ezio, για πρώτη φορά η ζωη του αγαπημένου μας χαρακτήρα στην γλώσσα μας! Τώρα, οι λάτρεις της σειράς μπορούν να απολαύσουν το Assassin\'s Creed ΙΙ με ελληνικούς υπότιτλους στην έκδοση για PC.',
      image: './assets/images/AssassinsCreedII_Greek.jpeg',
      document: './assets/subs/',
      version: '1.0.0'
    },
    {
      title: 'Assassin’s Creed® Mirage',
      description: 'Για πρώτη φορά στην ιστορία της σειράς, το Assassin\'s Creed αποκτά ελληνικά μέσω της ομάδας μας! Τώρα, οι λάτρεις της σειράς μπορούν να απολαύσουν το Assassin\'s Creed Mirage με υπότιτλους  στην γλώσσα μας, για την έκδοση του PC.',
      image: './assets/images/AssassinsCreedMirage_Greek.jpeg',
      document: './assets/subs/',
      version: '1.0.0'
    }
  ];
  
  ngOnInit(): void {}
}
