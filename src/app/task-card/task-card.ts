import { Component, input, output } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-card',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss'
})
export class TaskCard {
  task = input.required<Task>();
  completed = output<number>();

  markDone() { this.completed.emit(this.task().id); }
}