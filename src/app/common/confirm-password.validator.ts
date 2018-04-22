import { ValidationErrors, AbstractControl } from "@angular/forms";

export class ConfirmPasswordValidator {
    static doesMatchWithPassword(control: AbstractControl) : ValidationErrors | null{
        if(control.value == "11")
            return {doesMatchWithPassword : true};      // return errors
        return null;
    }
}