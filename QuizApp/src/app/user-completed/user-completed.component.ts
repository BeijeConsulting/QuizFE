import { Component, OnInit } from "@angular/core";
import { Question } from "../mockquestions/question";
import { QuestionsService } from "../questions.service";
import { completedQuiz } from "../mockquestions/question";
import { RisposteService } from "../risposte.service";
import * as Chartist from "chartist";

@Component({
  selector: "app-user-completed",
  templateUrl: "./user-completed.component.html",
  styleUrls: ["./user-completed.component.scss"]
})
export class UserCompletedComponent implements OnInit {
  questions: Question[];
  quizTot: completedQuiz[] = [];
  percent: number[] = [];
  perceArr: number[] = [];

  constructor(
    private questionService: QuestionsService,
    private risposteService: RisposteService
  ) {}

  ngOnInit() {
    this.getRisposte();
  }
  getPercentArray(id, perc) {
    this.percent.push(id);
    this.perceArr.push(perc);
    this.setChart();
  }
  getRisposte(): void {
    this.risposteService.getRisposte().subscribe(risposte => {
      this.quizTot = risposte;
    });
  }
  getSumCorrectFunct(id: number) {
    let count: number = 0;
    let quiz = this.quizTot.filter(quiz => quiz.id === id)[0];
    quiz.answersuser.map(answer => {
      if (answer.correct.toString() === answer.answer.toString()) {
        count++;
      }
    });
    let perc = (count / quiz.answersuser.length) * 100;
    this.percent.find(item => item === id)
      ? null
      : this.getPercentArray(id, perc);
    return count + "/" + quiz.answersuser.length;
  }
  setChart() {
    let label = this.percent.map(item => item.toString());

    const dataDailySalesChart: any = {
      labels: label,
      series: [this.perceArr]
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 101, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    };

    var dailySalesChart = new Chartist.Line(
      "#dailySalesChart",
      dataDailySalesChart,
      optionsDailySalesChart
    );

    this.startAnimationForLineChart(dailySalesChart);
  }
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on("draw", function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    });

    seq = 0;
  }
}
