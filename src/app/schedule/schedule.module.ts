import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialtyComponent } from './pages/specialty/specialty.component';
import { FilterDiaryComponent } from './pages/filter-diary/filter-diary.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { DoctorComponent } from './pages/doctor/doctor.component';



@NgModule({
  declarations: [
    SpecialtyComponent,
    FilterDiaryComponent,
    DiaryComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
