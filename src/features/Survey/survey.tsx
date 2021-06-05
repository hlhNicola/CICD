//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { useDispatch } from 'react-redux';
import { actions } from './reducer';
// import { Link } from 'react-router-dom';

 
export default function StartSurvey() {
 //Define Survey JSON
 //Here is the simplest Survey with one text question
 const dispatch = useDispatch()
 const json = {
  elements: [
   { 
     type: "text", 
     name: "age", 
     title: "How old are you?", 
     isRequired: true,
     validators: [
      {
          type: "numeric",
          minValue: 10,
          maxValue: 90
      }
  ]
    },
   { 
     type: "text", 
     name: "weight", 
     title: "What is your current weight (lb)?", 
     isRequired: true,
     validators: [
      {
          type: "numeric",
          minValue: 60,
          maxValue: 300
      }
  ]
    },
  ]
 };

 //Define a callback methods on survey complete
 const onComplete = (survey: any, options: any) => {
  //Write survey results into database
  dispatch(actions.surveyCompleted(survey.data))
 }

 var model = new Survey.Model(json);

  return (<Survey.Survey model={model} onComplete={onComplete}/>);
 
} 