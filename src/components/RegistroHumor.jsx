import React, { useState } from 'react';
import { Plus, TrendingUp, Calendar, Zap } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const RegistroHumor = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [notes, setNotes] = useState('');

  const moods = [
    { id: 'feliz', emoji: '😊', label: 'Feliz', color: 'bg-yellow-100 border-yellow-300 text-yellow-700' },
    { id: 'calmo', emoji: '😌', label: 'Calmo', color: 'bg-green-100 border-green-300 text-green-700' },
    { id: 'neutro', emoji: '😐', label: 'Neutro', color: 'bg-gray-100 border-gray-300 text-gray-700' },
    { id: 'triste', emoji: '😢', label: 'Triste', color: 'bg-blue-100 border-blue-300 text-blue-700' },
    { id: 'ansioso', emoji: '😰', label: 'Ansioso', color: 'bg-purple-100 border-purple-300 text-purple-700' },
    { id: 'irritado', emoji: '😤', label: 'Irritado', color: 'bg-red-100 border-red-300 text-red-700' },
    { id: 'cansado', emoji: '😴', label: 'Cansado', color: 'bg-indigo-100 border-indigo-300 text-indigo-700' },
    { id: 'grato', emoji: '🙏', label: 'Grato', color: 'bg-pink-100 border-pink-300 text-pink-700' }
  ];

  const moodHistory = [
    { date: '19/01/2024', mood: '😊', label: 'Feliz', note: 'Ótimo dia na universidade!' },
    { date: '18/01/2024', mood: '😰', label: 'Ansioso', note: 'Prova amanhã, um pouco nervoso' },
    { date: '17/01/2024', mood: '😌', label: 'Calmo', note: 'Dia tranquilo, consegui relaxar' },
    { date: '16/01/2024', mood: '😢', label: 'Triste', note: 'Dia difícil' },
    { date: '15/01/2024', mood: '😊', label: 'Feliz', note: 'Encontrei com amigos' }
  ];

  const stats = [
    { icon: Calendar, label: 'Registros totais', value: '5', color: 'text-blue-600' },
    { icon: Zap, label: 'Dias consecutivos', value: '0', color: 'text-orange-600' },
    { icon: TrendingUp, label: 'Humor mais comum', value: '😊', color: 'text-green-600' }
  ];

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      // Aqui você implementaria a lógica para salvar o humor
      console.log('Humor registrado:', selectedMood, notes);
      setSelectedMood(null);
      setNotes('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Registro de Humor
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acompanhe suas emoções diariamente e identifique padrões no seu bem-estar
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registro de Humor */}
          <div className="lg:col-span-2">
            {/* Como você está se sentindo hoje? */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Plus className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Como você está se sentindo hoje?
                </h2>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">
                Selecione seu humor atual:
              </p>

              {/* Mood Grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selectedMood === mood.id
                        ? mood.color + ' scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-2xl mb-2">{mood.emoji}</div>
                    <div className="text-xs font-medium">{mood.label}</div>
                  </button>
                ))}
              </div>

              {/* Notes */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notas (opcional):
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Como foi seu dia? O que influenciou seu humor?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!selectedMood}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  selectedMood
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Registrar Humor</span>
                </div>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gray-100`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                      <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Histórico de Humor */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Histórico de Humor
              </h2>
            </div>

            <div className="space-y-4">
              {moodHistory.map((entry, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">{entry.mood}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">{entry.label}</span>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{entry.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegistroHumor;

