import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({})
  /**
   *  用以取得 FormArray
   *
   * @readonly
   * @type {FormArray}
   * @memberof ReactiveFormsAsyncInsuredComponent
   */
  get formArray(): FormArray {
    return this.formGroup?.get('insuredList')! as FormArray;
  }

  /**
   * 綁定在送出按鈕上，判斷表單是不是無效
   *
   * @readonly
   * @type {boolean}
   * @memberof ReactiveFormsAsyncInsuredComponent
   */
  get isFormInvalid(): boolean {
    return this.formArray.controls.length === 0 || this.formGroup!.invalid;
  }

  /**
   * 透過 DI 取得 FromBuilder 物件，用以建立表單
   */
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      insuredList: new FormArray([])
    });
  }

  /**
   * 新增被保人
   *
   * @memberof ReactiveFormsAsyncInsuredComponent
   */
  addInsured(): void {
    const formGroup = this.createInsuredFormGroup();
    this.formArray.push(formGroup);
  }

  /**
   * 建立被保人的表單
   *
   * @private
   * @return {*}  {FormGroup}
   * @memberof ReactiveFormsAsyncInsuredComponent
   */
  private createInsuredFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
      ],
      gender: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  /**
   * 刪除被保人
   *
   * @param {number} index
   * @memberof ReactiveFormsAsyncInsuredComponent
   */
  deleteInsured(index: number): void {
    this.formArray.controls.splice(index, 1);
    this.formArray.updateValueAndValidity();
  }


  submit(): void {
    console.warn('do submit...');
  }

  /**
   * 透過欄位的 Errors 來取得對應的錯誤訊息
   *
   * @param {string} key
   * @param {number} index
   * @return {*}  {string}
   * @memberof ReactiveFormsAsyncInsuredComponent
   */
  getErrorMessage(key: string, index: number): string {
    const formGroup = this.formArray.controls[index];
    const formControl = formGroup.get(key);
    let errorMessage: string;
    if (!formControl || !formControl.errors || formControl.pristine) {
      errorMessage = '';
    } else if (formControl.errors['required']) {
      errorMessage = '此欄位必填';
    } else if (formControl.errors['minlength']) {
      errorMessage = '姓名至少需兩個字以上';
    } else if (formControl.errors['maxlength']) {
      errorMessage = '姓名至多只能輸入十個字';
    }
    return errorMessage!;
  }

}
