import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../../data.service";

import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "app-map",
    templateUrl: "./quiz.component.html"
  })

  export class QuizComponent implements OnInit {

    actionBarText: string;

    answers: [{}] = [{}];
    showAgeEligibilityQuestion: boolean;
    showUnderageText: boolean;
    showAgeEligibilityAnswers: boolean;

    showTattooQuestion: boolean;
    showHasTattooText: boolean;
    showTattooAnswers: boolean;

    showTravelQuestion: boolean;
    showHasTravelledAbroadText: boolean;
    showTravelAnswers: boolean;

    showDentalQuestion: boolean;
    showDentalAnswers: boolean;
    showHasHadDentalWorkText: boolean;

    showPregnantQuestion: boolean;
    showPregnantAnswers: boolean;
    showHasBeenPregnantText: boolean;

    showUKQuestion: boolean;
    showUKAnswers: boolean;
    showHasBeenToUKText: boolean;

    showMedicationQuestion: boolean;
    showMedicationAnswers: boolean;
    showTakesMedicationText: boolean;

    showWeightQuestion: boolean;
    showWeightAnswers: boolean;
    showBelowWeightText: boolean;

    quizCompleted: boolean;

      constructor(private service: DataService, private router: RouterExtensions) {
      }

      ngOnInit() {
          this.showAgeEligibilityQuestion = true;
          this.showAgeEligibilityAnswers = true;
          this.actionBarText = "Eligibility Quiz (1 of 8)";
      }

      isAboveWeight() {
          let answer = {
              "question":"weight",
              "answer":"Yes"
          }

          this.answers.push(answer);
          this.showWeightAnswers = false;
          this.showWeightQuestion = false;
          this.quizCompleted = true;
          this.actionBarText = "Eligibility Quiz";
      }

      isBelowWeight() {
          this.showWeightAnswers = false;
          this.showBelowWeightText = true;
      }

      hasTakenMedication() {
          this.showMedicationAnswers = false;
          this.showTakesMedicationText = true;
      }

      hasNotTakenMedication() {
          let answer = {
              "question":"medication",
              "answer":"No"
          }

          this.answers.push(answer);
          this.showMedicationAnswers = false;
          this.showMedicationQuestion = false;
          this.showWeightQuestion = true;
          this.showWeightAnswers = true;
          this.actionBarText = "Eligibility Quiz (8 of 8)";
      }

      hasBeenToUK() {
          this.showUKAnswers = false;
          this.showHasBeenToUKText = true;
      }

      hasNotBeenToUK() {
          let answer = {
              "question":"uk",
              "answer":"No"
          }

          this.answers.push(answer);
          this.showUKAnswers = false;
          this.showUKQuestion = false;
          this.showMedicationQuestion = true;
          this.showMedicationAnswers = true;
          this.actionBarText = "Eligibility Quiz (7 of 8)"
      }

      hasBeenPregnant() {
          this.showPregnantAnswers = false;
          this.showHasBeenPregnantText = true;
      }

      hasNotBeenPregnant() {
          let answer = {
              "question":"pregnancy",
              "answer": "No"
          }
          this.answers.push(answer);
          this.showPregnantAnswers = false;
          this.showPregnantQuestion = false;
          this.showUKQuestion = true;
          this.showUKAnswers = true;
          this.actionBarText = "Eligibility Quiz (6 of 8)";
      }

      hasHadDentalAppt() {
          this.showDentalAnswers = false;
          this.showHasHadDentalWorkText = true;
      }
      hasNotHadDentalAppt() {
          let answer = {
              "question":"dentalAppt",
              "answer":"No"
          }
          this.answers.push(answer);
          this.showDentalAnswers = false;
          this.showDentalQuestion = false;
          this.showPregnantQuestion = true;
          this.showPregnantAnswers = true;
          this.actionBarText = "Eligibility Quiz (5 of 8)";
      }

      hasTattoo() {
          this.showTattooAnswers = false;
          this.showHasTattooText = true;
      }

      hasTravelled() {
          this.showTravelAnswers = false;
          this.showHasTravelledAbroadText = true;
      }

      hasNotTravelled() {
          let answer = {
              "question":"travelledAbroad",
              "answer":"No"
          }
          this.answers.push(answer);
          this.showTravelAnswers = false;
          this.showTravelQuestion = false;
          this.showDentalQuestion = true;
          this.showDentalAnswers = true;
          this.actionBarText = "Eligibility Quiz (4 of 8)";
      }

      notHasTattoo() {
        //let obj = this.answers.find(o => o.question === 'tattoo');
          let answer = {
              "question":"tattoo",
              "answer":"No"
          }
          this.answers.push(answer);
          this.showTattooAnswers = false;
          this.showTattooQuestion = false;
          this.showTravelQuestion = true;
          this.showTravelAnswers = true;
          this.actionBarText = "Eligibility Quiz (3 of 8)";
      }

      isOverSeventeen() {
        //let obj = this.answers.find(o => o.question === 'ageEligibility');
          let answer = {
              "question": "ageEligibility",
              "answer":"Yes"
          }
          this.answers.push(answer);
          this.showAgeEligibilityAnswers = false;
          this.showTattooQuestion = true;
          this.showTattooAnswers = true;
          this.actionBarText = "Eligibility Quiz (2 of 8)";
      }

      isNotOverSeventeen() {
          this.showAgeEligibilityAnswers = false;
          this.showUnderageText = true;
      }

      goToMap() {
        this.router.navigate(["/map"],
        {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
      }

  }