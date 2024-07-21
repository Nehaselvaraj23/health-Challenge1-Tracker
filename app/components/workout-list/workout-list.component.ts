import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  users: User[] = [];
  searchName = '';
  workoutFilter = '';
  page = 1;
  pageSize = 5;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.users = this.workoutService.getUsers();
  }

  get filteredUsers(): User[] {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchName.toLowerCase()) &&
      (!this.workoutFilter || user.workouts.some(workout => workout.type === this.workoutFilter))
    );
  }
}

