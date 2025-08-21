import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Autoavaliacao = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      category: "Estresse Acadêmico",
      question: "Com que frequência você se sente sobrecarregado(a) com suas responsabilidades acadêmicas?",
      options: [
        { value: 1, text: "Nunca" },
        { value: 2, text: "Raramente" },
        { value: 3, text: "Às vezes" },
        { value: 4, text: "Frequentemente" },
        { value: 5, text: "Sempre" }
      ]
    },
    {
      id: 2,
      category: "Sono e Descanso",
      question: "Como você avalia a qualidade do seu sono nas últimas duas semanas?",
      options: [
        { value: 1, text: "Excelente" },
        { value: 2, text: "Boa" },
        { value: 3, text: "Regular" },
        { value: 4, text: "Ruim" },
        { value: 5, text: "Muito ruim" }
      ]
    },
    {
      id: 3,
      category: "Relacionamentos",
      question: "Com que frequência você se sente apoiado(a) por amigos e familiares?",
      options: [
        { value: 5, text: "Sempre" },
        { value: 4, text: "Frequentemente" },
        { value: 3, text: "Às vezes" },
        { value: 2, text: "Raramente" },
        { value: 1, text: "Nunca" }
      ]
    },
    {
      id: 4,
      category: "Humor e Emoções",
      question: "Nas últimas duas semanas, com que frequência você se sentiu triste ou desanimado(a)?",
      options: [
        { value: 1, text: "Nunca" },
        { value: 2, text: "Raramente" },
        { value: 3, text: "Às vezes" },
        { value: 4, text: "Frequentemente" },
        { value: 5, text: "Sempre" }
      ]
    },
    {
      id: 5,
      category: "Ansiedade",
      question: "Com que frequência você se sente ansioso(a) ou preocupado(a) excessivamente?",
      options: [
        { value: 1, text: "Nunca" },
        { value: 2, text: "Raramente" },
        { value: 3, text: "Às vezes" },
        { value: 4, text: "Frequentemente" },
        { value: 5, text: "Sempre" }
      ]
    },
    {
      id: 6,
      category: "Autocuidado",
      question: "Com que frequência você dedica tempo para atividades que lhe trazem prazer?",
      options: [
        { value: 5, text: "Sempre" },
        { value: 4, text: "Frequentemente" },
        { value: 3, text: "Às vezes" },
        { value: 2, text: "Raramente" },
        { value: 1, text: "Nunca" }
      ]
    },
    {
      id: 7,
      category: "Concentração",
      question: "Nas últimas semanas, como tem sido sua capacidade de concentração nos estudos?",
      options: [
        { value: 5, text: "Excelente" },
        { value: 4, text: "Boa" },
        { value: 3, text: "Regular" },
        { value: 2, text: "Ruim" },
        { value: 1, text: "Muito ruim" }
      ]
    },
    {
      id: 8,
      category: "Bem-estar Geral",
      question: "De forma geral, como você avalia seu bem-estar emocional atual?",
      options: [
        { value: 5, text: "Excelente" },
        { value: 4, text: "Bom" },
        { value: 3, text: "Regular" },
        { value: 2, text: "Ruim" },
        { value: 1, text: "Muito ruim" }
      ]
    }
  ];

  const handleAnswerSelect = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Autoavaliação de Bem-estar
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Responda as perguntas com honestidade para obter uma avaliação personalizada do seu bem-estar atual.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progresso</span>
            <span className="text-sm text-gray-600">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="mb-6">
            <div className="text-sm text-blue-600 font-medium mb-2">
              {currentQ.category}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  answers[currentQ.id] === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={option.value}
                  checked={answers[currentQ.id] === option.value}
                  onChange={() => handleAnswerSelect(currentQ.id, option.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  answers[currentQ.id] === option.value
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {answers[currentQ.id] === option.value && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-gray-700 flex-1">{option.text}</span>
                <span className="text-sm text-gray-400">({option.value})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              currentQuestion === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Anterior</span>
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              disabled={!answers[currentQ.id]}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                answers[currentQ.id]
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Finalizar Avaliação
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!answers[currentQ.id]}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                answers[currentQ.id]
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>Próxima</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Autoavaliacao;

