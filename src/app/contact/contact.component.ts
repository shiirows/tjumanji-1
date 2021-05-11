import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  // reactive form group
  public formulaire: FormGroup;
  // textarea binding
  public bodyOfMessage: string;
  // link to href
  public mailto: string;

  constructor(private fb: FormBuilder) {}

  // modifier le contenu de 'mailto' lorsqu'on ecrit dans le message input
  onMessageChange(): void {
    this.bodyOfMessage = this.formulaire.get('message').value;
    this.mailto =
      "mailto:contact@ofcourse.fr?subject=demande d'information&cc=contact@ofcourse.fr&bcc=contact@ofcourse.fr&body=" +
      this.bodyOfMessage;
  }

  ngOnInit(): void {
    // initialiser les controls et validation du formulaire
    this.formulaire = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      ],
      prenom: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(13),
          Validators.maxLength(120),
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(360),
        ],
      ],
      tableau: this.fb.array([]),
    });
  }
}
