import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import shared components here
// import { ExampleSharedComponent } from './components/example-shared/example-shared.component'; 

const routes: Routes = [
  {
    path: 'example',
    // component: ExampleSharedComponent
  }
  // Add more routes as needed for shared components
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
