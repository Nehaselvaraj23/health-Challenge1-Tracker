import { Component } from '@angular/core';
import { WorkoutService} from '../../services/workout.service';
import { User } from '../../models/user';
import { Workout  } from '../../models/workout';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent {
  userName = '';
  workoutType = '';
  workoutMinutes = 0;

  constructor(private workoutService: WorkoutService) {}

  addWorkout(): void {
    const user: User = {
      id: Date.now(),
      name: this.userName,
      workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }]
    };
    this.workoutService.addUser(user);
    this.resetForm();
  }

  private resetForm(): void {
    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
