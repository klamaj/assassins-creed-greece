import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  terms: boolean = false;

  games$: Game[] = [
    {
      title: 'Assassin’s Creed® Revelations',
      description: 'Πιστοί στην υπόσχεσή μας, ολοκληρώσαμε την τριλογία του Ezio. Ταξιδέψτε στην Ιερουσαλήμ και ξαναζήστε τις μνήμες του μεγάλου Altair, για πρώτη φορά στην ελληνική γλώσσα! Τώρα, οι λάτρεις της σειράς μπορούν να απολαύσουν το Assassin\'s Creed Revelations με ελληνικούς υπότιτλους στην έκδοση για PC.',
      image: './assets/images/ACRevelations_GR_Subs_Cover.webp',
      document: './assets/subs/ACBrotherhood_Greek_Subs_By_ACGreece.zip',
      version: '1.0',
      info: 'Οι υπότιτλοι για το “Desmond\'s Journey” & “The Lost Archive” (DLC), θα προστεθούν αργότερα σε βίντεο στο κανάλι μας.'
    },
    {
      title: 'Assassin’s Creed® Brotherhood',
      description: 'Το δεύτερο μέρος της τριλογίας είναι εδώ! Ο Ezio επιστρέφει και ταξιδεύει στη Ρώμη για να την ελευθερώσει από τα χέρια των Templars, για πρώτη φορά στην γλώσσα μας! Τώρα, οι λάτρεις της σειράς μπορούν να απολαύσουν το Assassin\'s Creed Brotherhood με ελληνικούς υπότιτλους στην έκδοση για PC.',
      image: './assets/images/ACBrotherhood_GR_Subs_Cover_Web.jpg',
      document: './assets/subs/ACBrotherhood_Greek_Subs_By_ACGreece.zip',
      version: '1.0',
      info: null
    },
    {
      title: 'Assassin’s Creed® II',
      description: 'Η προσπάθεια μας για την προσθήκη ελληνικών συνεχίζεται, αυτή την φορά ξεκινάμε με την τριλογία του Ezio, για πρώτη φορά η ζωη του αγαπημένου μας χαρακτήρα στην γλώσσα μας! Τώρα, οι λάτρεις της σειράς μπορούν να απολαύσουν το Assassin\'s Creed ΙΙ με ελληνικούς υπότιτλους στην έκδοση για PC.',
      image: './assets/images/AssassinsCreedII_Greek.jpeg',
      document: './assets/subs/AC2_Greek_Subs_By_ACGreece.zip',
      version: '1.0',
      info: null
    },
    {
      title: 'Assassin’s Creed® Mirage',
      description: 'Για πρώτη φορά στην ιστορία της σειράς, το Assassin\'s Creed αποκτά ελληνικά μέσω της ομάδας μας! Τώρα, οι λάτρεις της σειράς μπορούν να απολαύσουν το Assassin\'s Creed Mirage με υπότιτλους  στην γλώσσα μας, για την έκδοση του PC.',
      image: './assets/images/AssassinsCreedMirage_Greek.jpeg',
      document: './assets/subs/ACMirage_Greek_Subs_By_ACGreece.zip',
      version: '2.1',
      info: null
    }
  ];

  card: string = '';
  
  ngOnInit(): void {}

  setDocument(doc: string) {
    this.card = doc;
    this.terms = true;
  }
}
