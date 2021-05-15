import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TitleService } from 'src/app/services/title.service';
import { TrainingService } from 'src/app/services/training.service';
import * as json_data from '../training.json'

@Component({
  selector: 'app-training-feedback',
  templateUrl: './training-feedback.component.html',
  styleUrls: ['./training-feedback.component.scss']
})
export class TrainingFeedbackComponent implements OnInit {

  
  TrainingFeedbackForm = this.fb.group({
    TrainingName: [null, Validators.required],
    Employee: [null, Validators.required],
    Feedback: [null, Validators.required],
   
  });
  TrainingName = json_data.TrainingName;
  title: String;
  
  constructor(
    private fb: FormBuilder,
    private titleService: TitleService,
    private trainingService: TrainingService,
    private _snackBar: MatSnackBar,
    
  ) {
    this.titleService.setTitle('Training Feedback');

   }

  ngOnInit(): void {
    this.titleService
    .getTitle()
    .subscribe((appTitle) => (this.title = appTitle));

    
  }

  onSubmit(){
    console.log("submitted")
    if(this.TrainingFeedbackForm.valid){
      this.trainingService.addFeedback(this.TrainingFeedbackForm.value).subscribe(
        (data) => {
          if (data.message) {
            this._snackBar.open(data.message, 'OK', {
              duration: 2000,
            });
          }
        }
      )
    }
  }

}
