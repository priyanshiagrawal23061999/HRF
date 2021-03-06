import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private API = 'https://m2aster.herokuapp.com/api/';
  private putFeedback = "training/addFeedback/"
  private insertTraining = "training/addTraining";
  private getTrainings = "training/getTrainings";
  private getFeedbacks = "training/getFeedback/"

  addFeedback(id, feedback): Observable<any> {
    return this.http.put(this.API + this.putFeedback + id, feedback, this.httpOptions);
  }
  addTraining(training): Observable<any> {
    return this.http.post(this.API + this.insertTraining, training, this.httpOptions);
  }
  trainings(){
    return this.http.get(this.API + this.getTrainings, this.httpOptions)
  }
  feedbacks(id){
    return this.http.get(this.API + this.getFeedbacks + id, this.httpOptions)

  }
}
