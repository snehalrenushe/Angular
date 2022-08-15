import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit 
{
  id!: number;
  editMode = false;
  public proForm!: FormGroup;
  projectInfo: any;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm(null);
        }
      );
  }

  getProjects(){
    this.projectInfo = this.projectService.getProject(this.id);
    this.initForm(this.projectInfo);
  }

  onSubmit() 
  {
    if (this.editMode) 
    {
      this.projectService.updateProject(this.id, this.proForm.value);
    }
    else 
    {
      this.projectService.addProject(this.proForm.value);
    }
    
    this.onCancel();
  }

  onAddBook() 
  {
    (<FormArray>this.proForm.get('Books')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  get f(){return this.proForm.get('Books') as FormArray}

  onDeleteBook(index: number) 
  {
    (<FormArray>this.proForm.get('Books')).removeAt(index);
  }

  onCancel() 
  {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(value:any)         //set value to form when load 1st if available
  {
    this.proForm = new FormGroup({
      'name': new FormControl(value? value.name: '', Validators.required),
      'imagePath': new FormControl(value? value.imagePath: '', Validators.required),
      'description': new FormControl(value? value.description: '', Validators.required),
      'Books': new FormArray([this.addBooks(value? value.Books: null)])         //call addBooks from here to form new FormGroupp and push into Books FormArray
    });
  }

  //create new FormGroup for books and return to Books formArray
  addBooks(value:any){
    return new FormGroup({
      'name': new FormControl(value? value.name: '', Validators.required),
      'amount': new FormControl(value? value.amount: '', [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    })
  }

  //Add controls(text boxes) on form
  addBookControl(){
    (<FormArray>this.proForm.get('Books')).push(this.addBooks(null));
  }

}
