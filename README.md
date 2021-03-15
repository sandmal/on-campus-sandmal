# Practical information

I didn't have time to implement a clean css style or add a functional backend. Css is not my strong side, and i noticed that i added CSS as a last step and made it hard for me to implement it good based on what functionality i had added. Error message is added to DOM and makes the form bigger. If i could do this again i would have added CSS earlier and would make it easier to see what the final product would look like.

How to run

- npm install
- npm start

## Form implementation

I chose to try out adding forms dynamicaly using react-hook-form and Yup for validation.

How it works:
Form.js is used to create form inputs and add validation using formconfig.js
Inputs are setup like a schema. Validations are setup using yupresolver with predefined validation rules.
Forms are dynamically added by mapping through the formschema. Name, label, type and formtype is passed as props. with errors, control and key.

Inside formController useController hook is used. useController is a custom hook that powers controller, its used to create reusable controlled input.
Ref and inputprops are used to create inputs.
Formcontroller will render inputs based on the order the formschema has.

Add new form option:
Inside formConfig.js
Name, label, type and formType is required
formType is required to enable that input inside different forms

- Add input field to formSchema
- Add yup rule inside corresponding form schema or add new one
- if new form add a import to form.js

## component state

Form is a stateless component (only gets input from props)
My plan was to have a login component that was used to render form based on what the used clicked on (this would have been a stateful component, where state was changed from children to parent and parent to children.) I didnt have time to implement this, i tried first but noticed that it would take some time so i went for a cheaper option and using statless instead.

Im not 100% sure if i did the login and Auth right (it works). I looked at implementing better options but failed so i added most of the functionality from existing branch (protectedRoutesV1)

I think both stateless and stateful component would be viable here.

## What i have learned

- One way to make protective routing
- Create dynamic Nav bar
- Need to comment while programming
- Focus on stuff like css and how that will work with added functionalities
- Using libraries: Yup and react-hook-form
- Using HOC with hooks

## What i could have done better:

- commenting during programming would have made it easier to write this readme file
- Create components and plan out how i would style it and then add functionality
- Add a functional backend
- Not used as much time on forms (even though i learned alot)
- tried to add eslint but got many errors, this results in the bad formatting some places
- Understand when to use classes and functions
- Create a better folder structure
- learn to manage my time better (I have some complex stuff and then timelimit made me sacrefice some functionalities i wanted to add)
- Could add better css to make it more responsive
- Practive using css with react (would look into library options)
- Learn to use Branches to implement different features. This would have made it easier to work in the long run.
  This is a second thought after finished with oblig. This would make it easier to scale the project aswell.
