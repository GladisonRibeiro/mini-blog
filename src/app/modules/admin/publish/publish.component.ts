import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ArticleService } from './../../../services/article.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      "id": [''],
      "title": ['', [Validators.required, Validators.minLength(5)]],
      "description": [''],
      "content": ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.articleService.update(data);
      this.form.reset();
    }
    else {
      alert('Form not Valid!');
    }
  }

}
