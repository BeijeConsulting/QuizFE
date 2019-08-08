import { Component, OnInit } from '@angular/core';
import {Question} from '../mockquestions/question';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {QuestionsService} from '../questions.service';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})


export class SearchpageComponent implements OnInit {

  questions$: Observable<Question[]>;
  private searchques = new Subject<string>();


  constructor(private questionsService: QuestionsService) { }

  term: string;
  questions: Question[];
  testi = [];
  newques = [];





  ngOnInit()  { // viene eseguita una volta che viene caricata la pagina, quindi solo quella volta li
    this.getQuestions();

  }


  getQuestions(): void {
    this.questionsService.getQuestions()
       .subscribe(questions =>this.questions = questions)
  }



  searchQuestions(term: string): void {
    const question=this.questions.filter(q => q.tag.indexOf(term) !== -1);
    this.testi = question;
    // this.testi = array.map(t => t.text);
    // const tag=array.filter((value)=> value.indexOf(term) != -1)


    console.log(question)


  }

  delete(question: Question): void {
  console.log(question.id)
  this.questions = this.questions.filter(q => q !== question);
  this.testi=this.testi.filter(t => t !== question)
  this.questionsService.deleteQuestion(question).subscribe();

  //console.log(question)  ---> mi stampa la domanda
  //console.log(this.questions)  ---> il numero totali delle domande viene modificato
  //console.log(this.testi) ----> quando schiaccio il numero delle domande rimane invariato

}

   edit(question: Question): void {
      this.newques=question;


}





}



// <input [(ngModel)]="selectedHero.name" placeholder="name"/> nell'ngModel devi mettere tra apici la categoria degli elemnti che deve prendere
