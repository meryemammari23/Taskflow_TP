import { Component, signal, computed } from '@angular/core';
import { Task } from '../task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  tasks = signal<Task[]>([
    { id: 1, title: 'Lire le cours Angular', completed: false, priority: 'high', dueDate: '2026-11-25' },
    { id: 2, title: 'Installer le CLI', completed: true, priority: 'medium' },
    { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low', dueDate: '2026-11-30' },
  ]);
  count = computed(() => this.tasks().length);
  nextId = 4;

  add() {
    const t: Task = { id: this.nextId++, title: 'Nouvelle tâche', completed: false, priority: 'medium' };
    this.tasks.update(items => [...items, t]);
  }

  clear() { this.tasks.set([]); }

  onCompleted(id: number) {
    this.tasks.update(items => items.map(t => t.id === id ? { ...t, completed: true } : t));
  }
}