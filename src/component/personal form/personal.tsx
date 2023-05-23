import { PersonalData } from "../../model/personal-data-form";
import { SyntheticEvent } from "react";

export function PersonalForm() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const PersonalData = new PersonalData(
      (form.elements.namedItem("name") as HTMLInputElement).value,
      (form.elements.namedItem("lastName") as HTMLInputElement).value
    );
    return (
      <>
        <form>hi</form>
      </>
    );
  };
}
