//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { useDispatch } from 'react-redux';
import { actions } from './reducer';
 
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
    {
      type: "dropdown",
      name: "shape",
      title: "Please select your body shape",
      isRequired: false,
      colCount: 0,
      choices: [
          "Apple",
          "Pear",
          "Hourglass",
      ]
    },
    {
      type: "dropdown",
      name: "bust",
      title: "Please select your bust",
      isRequired: false,
      colCount: 0,
      choices: [
          "Small-Medium",
          "Medium-Large",
      ]
    }
  ]
 };

 //Define a callback methods on survey complete
 const onComplete = (survey: any, options: any) => {
  //Write survey results into database
  dispatch(actions.surveyCompleted(survey.data))
 }
 var model = new Survey.Model(json);
  return (
    <div >
      <div style={{background: '#1AB394', height: '100px', marginTop: '-200px'}} />
        <Survey.Survey model={model} onComplete={onComplete} />
      <div style={{background: '#1AB394', height: '280px'}} />
  </div>
  );
} 