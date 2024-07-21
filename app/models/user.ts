import { Workout } from './workout';
export interface User{
    id:number;
    name:string;
    workouts: Workout[];
}