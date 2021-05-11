import { Injectable } from '@angular/core';
import {SocialMedia} from '../social.model';

@Injectable({
  providedIn: 'root'
})
export class ResSociauxService {
   //je crée un tableau de type SocialMedia
   public reseaux: SocialMedia[] = [];

   //je push mes trois valeurs dans le tableau
   constructor() {
     this.reseaux.push(
       new SocialMedia(
         'facebook',
         'fab fa-facebook',
         'https://fr-fr.facebook.com/'
       ),
       new SocialMedia(
         'twitter',
         'fab fa-twitter',
         'https://twitter.com/?lang=fr'
       ),
       new SocialMedia(
         'instagram',
         'fab fa-instagram',
         'https://www.instagram.com/?hl=fr'
       )
     );
   }
 
   // fonction pour retourner mon tableau de reseaux
   public initReseaux() {
     return this.reseaux;
   }


}
