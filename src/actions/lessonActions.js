import './editorActions';
import { render } from './editorActions';

export const LOAD_LESSON = "LOAD_LESSON";

const ref = 'http://localhost:3001/lessons/';

export function fetchLesson(lvlId) {
  return (dispatch) => {
    fetch(ref + lvlId, {
      headers: { 'content-type': 'application/json' },
    })
      .then(response => response.json().then(json => ({ json, response })))
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        dispatch(loadLesson(json));
        dispatch(render(json.code || ""));
      })
      .then(
        response => response,
        error => error
      );
  };
}

function loadLesson(lesson) {
  return {
    type: LOAD_LESSON,
    payload: lesson
  };
}
