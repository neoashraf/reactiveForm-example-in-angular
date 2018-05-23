import { ValidationErrors, AbstractControl } from "@angular/forms";

export class PassValidator {

    static passMatcher(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (control.value === "1234")
                    resolve ({ passMatcher: true });
                else
                    resolve (null);
            }, 1000);
        });
    }
}