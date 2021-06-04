//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";

export default function StartSurvey() {
 //Define Survey JSON
 //Here is the simplest Survey with one text question
 const json = {
  elements: [
   { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
  ]
 };

 //Define a callback methods on survey complete
 const onComplete = (survey: any, options: any) => {
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }

 var model = new Survey.Model(json);

  return (<Survey.Survey model={model} onComplete={onComplete}/>);
 
} 