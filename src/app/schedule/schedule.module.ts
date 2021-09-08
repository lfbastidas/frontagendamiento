import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialtyComponent } from './pages/specialty/specialty.component';
import { FilterDiaryComponent } from './pages/filter-diary/filter-diary.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    SpecialtyComponent,
    FilterDiaryComponent,
    DiaryComponent,
    DoctorComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
