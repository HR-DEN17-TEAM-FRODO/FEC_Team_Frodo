/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import getQuestions from './getQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';
import QuestionsSearch from './QuestionsSearch.jsx';

export const QuestionsContext = React.createContext();
export const SearchContext = React.createContext();

function Questions() {
  const [questions, setQuestions] = useState({});
  const [searchResults, setSearchResults] = useState({});

  if (Object.keys(questions).length === 0) {
    getQuestions((data) => {
      setQuestions(data);
    });
    return (null);
  }

  return (
    <QuestionsContext.Provider value={[questions, setQuestions]}>
      <SearchContext.Provider value={[searchResults, setSearchResults]}>
        <div id="questionsMain">
          <p className="questionsTitle">Questions & Answers</p>
          <QuestionsSearch />
          <QuestionsList />
        </div>
      </SearchContext.Provider>
    </QuestionsContext.Provider>
  );
}

export default Questions;
