'use client';

import { useState } from 'react';
import { DIALOGUES, type Dialogue } from '@/lib/dialogues';
import { SpeakerIcon, CheckIcon, XIcon, RefreshIcon } from './icons';

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

type Phase = 'select' | 'reading' | 'quiz' | 'complete';

export function DialogueLearning() {
  const [selectedDialogue, setSelectedDialogue] = useState<Dialogue | null>(null);
  const [phase, setPhase] = useState<Phase>('select');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const handleSelectDialogue = (dialogue: Dialogue) => {
    setSelectedDialogue(dialogue);
    setPhase('reading');
    setCurrentLineIndex(0);
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
  };

  const handleNextLine = () => {
    if (!selectedDialogue) return;
    if (currentLineIndex < selectedDialogue.lines.length - 1) {
      setCurrentLineIndex(prev => prev + 1);
    } else {
      setPhase('quiz');
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (!selectedDialogue || selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === selectedDialogue.questions[currentQuestionIndex].answer;
    setIsCorrect(correct);
    if (correct) setCorrectCount(prev => prev + 1);
  };

  const handleNextQuestion = () => {
    if (!selectedDialogue) return;
    if (currentQuestionIndex < selectedDialogue.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setPhase('complete');
    }
  };

  const handleReset = () => {
    setSelectedDialogue(null);
    setPhase('select');
    setCurrentLineIndex(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectCount(0);
  };

  if (phase === 'select') {
    return <DialogueSelector onSelect={handleSelectDialogue} />;
  }

  if (!selectedDialogue) return null;

  if (phase === 'reading') {
    return (
      <DialogueReader
        dialogue={selectedDialogue}
        currentLineIndex={currentLineIndex}
        onNext={handleNextLine}
        onBack={handleReset}
      />
    );
  }

  if (phase === 'quiz') {
    return (
      <DialogueQuiz
        dialogue={selectedDialogue}
        currentQuestionIndex={currentQuestionIndex}
        selectedAnswer={selectedAnswer}
        isCorrect={isCorrect}
        onAnswer={handleAnswer}
        onNext={handleNextQuestion}
        onBack={handleReset}
      />
    );
  }

  return (
    <DialogueComplete
      dialogue={selectedDialogue}
      correctCount={correctCount}
      totalQuestions={selectedDialogue.questions.length}
      onReset={handleReset}
    />
  );
}

function DialogueSelector({ onSelect }: { onSelect: (d: Dialogue) => void }) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-bold text-text-primary">情景对话</h2>
        <p className="text-sm text-text-secondary mt-1">在真实场景中学习单词和语法</p>
      </div>

      <div className="grid gap-3">
        {DIALOGUES.map((dialogue) => (
          <button
            key={dialogue.id}
            onClick={() => onSelect(dialogue)}
            className="bg-bg-card rounded-xl p-4 border border-border text-left hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-text-primary">{dialogue.titleCn}</span>
                  <span className="text-xs px-1.5 py-0.5 bg-success/10 text-success rounded">Lv.{dialogue.level}</span>
                </div>
                <div className="text-sm text-text-secondary mt-0.5">{dialogue.title}</div>
                <div className="text-xs text-text-secondary mt-2">
                  <span className="inline-flex items-center gap-1 mr-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {dialogue.scene}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-warm/50" />
                    {dialogue.questions.length} 道理解题
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {dialogue.keyWords.slice(0, 4).map((word) => (
                <span key={word} className="text-[10px] px-1.5 py-0.5 bg-bg-body rounded text-text-secondary">{word}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function DialogueReader({
  dialogue,
  currentLineIndex,
  onNext,
  onBack,
}: {
  dialogue: Dialogue;
  currentLineIndex: number;
  onNext: () => void;
  onBack: () => void;
}) {
  const line = dialogue.lines[currentLineIndex];
  const isNarrator = line.speaker === '旁白';
  const progress = ((currentLineIndex + 1) / dialogue.lines.length) * 100;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-text-secondary hover:text-text-primary">
          ← 返回
        </button>
        <div className="text-sm text-text-secondary">
          {currentLineIndex + 1} / {dialogue.lines.length}
        </div>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-bg-body rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Scene */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-text-primary">{dialogue.titleCn}</h3>
        <p className="text-xs text-text-secondary">{dialogue.scene}</p>
      </div>

      {/* Dialogue Bubble */}
      <div className={`flex ${isNarrator ? 'justify-center' : line.speaker === 'A' ? 'justify-start' : 'justify-end'}`}>
        <div className={`max-w-[85%] ${
          isNarrator
            ? 'bg-bg-body rounded-xl px-4 py-3'
            : line.speaker === 'A'
            ? 'bg-bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3'
            : 'bg-primary/10 border border-primary/20 rounded-2xl rounded-br-sm px-4 py-3'
        }`}>
          {!isNarrator && (
            <div className="text-xs font-medium text-text-secondary mb-1">
              {line.speaker === 'A' ? '顾客/路人' : '店员/路人'}
            </div>
          )}
          <div className="text-base text-text-primary leading-relaxed">{line.text}</div>
          <div className="text-sm text-text-secondary mt-1">{line.translation}</div>
          <button
            onClick={() => speak(line.text)}
            className="mt-2 p-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            title="播放发音"
          >
            <SpeakerIcon size={14} />
          </button>
        </div>
      </div>

      {/* Grammar Point */}
      {line.highlight && line.highlight.length > 0 && (
        <div className="bg-accent-warm/5 border border-accent-warm/20 rounded-xl p-3">
          <div className="text-xs font-medium text-accent-warm mb-1">重点表达</div>
          <div className="flex flex-wrap gap-1.5">
            {line.highlight.map((word) => (
              <span key={word} className="text-xs px-2 py-0.5 bg-accent-warm/10 text-accent-warm rounded-full">{word}</span>
            ))}
          </div>
        </div>
      )}

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
      >
        {currentLineIndex < dialogue.lines.length - 1 ? '下一句 →' : '开始答题 →'}
      </button>
    </div>
  );
}

function DialogueQuiz({
  dialogue,
  currentQuestionIndex,
  selectedAnswer,
  isCorrect,
  onAnswer,
  onNext,
  onBack,
}: {
  dialogue: Dialogue;
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  onAnswer: (idx: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const question = dialogue.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / dialogue.questions.length) * 100;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-text-secondary hover:text-text-primary">
          ← 返回
        </button>
        <div className="text-sm text-text-secondary">
          题目 {currentQuestionIndex + 1} / {dialogue.questions.length}
        </div>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-bg-body rounded-full overflow-hidden">
        <div className="h-full bg-accent-warm rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Question */}
      <div className="bg-bg-card rounded-xl p-4 border border-border">
        <div className="text-xs text-text-secondary mb-2">
          场景：{dialogue.titleCn} - {dialogue.scene}
        </div>
        <div className="text-base font-medium text-text-primary">{question.question}</div>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {question.options.map((option, idx) => {
          let className = 'bg-bg-card border border-border';
          if (selectedAnswer !== null) {
            if (idx === question.answer) {
              className = 'bg-success/10 border border-success';
            } else if (idx === selectedAnswer && !isCorrect) {
              className = 'bg-error/10 border border-error';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => onAnswer(idx)}
              disabled={selectedAnswer !== null}
              className={`w-full p-3 rounded-xl text-left transition-all ${className} ${
                selectedAnswer === null ? 'hover:border-primary/50' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-bg-body flex items-center justify-center text-xs font-medium text-text-secondary shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm text-text-primary">{option}</span>
                {selectedAnswer !== null && idx === question.answer && (
                  <CheckIcon size={16} className="text-success ml-auto" />
                )}
                {selectedAnswer !== null && idx === selectedAnswer && !isCorrect && (
                  <XIcon size={16} className="text-error ml-auto" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {isCorrect !== null && (
        <div className={`rounded-xl p-3 ${isCorrect ? 'bg-success/5 border border-success/20' : 'bg-error/5 border border-error/20'}`}>
          <div className={`text-xs font-medium mb-1 ${isCorrect ? 'text-success' : 'text-error'}`}>
            {isCorrect ? '✓ 回答正确！' : '✗ 回答错误'}
          </div>
          <div className="text-sm text-text-secondary">{question.explanation}</div>
        </div>
      )}

      {/* Next Button */}
      {selectedAnswer !== null && (
        <button
          onClick={onNext}
          className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
        >
          {currentQuestionIndex < dialogue.questions.length - 1 ? '下一题 →' : '查看结果 →'}
        </button>
      )}
    </div>
  );
}

function DialogueComplete({
  dialogue,
  correctCount,
  totalQuestions,
  onReset,
}: {
  dialogue: Dialogue;
  correctCount: number;
  totalQuestions: number;
  onReset: () => void;
}) {
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const isPerfect = correctCount === totalQuestions;

  return (
    <div className="space-y-6 text-center py-8">
      {/* Celebration */}
      <div className={`text-6xl ${isPerfect ? 'animate-bounce' : ''}`}>
        {isPerfect ? '🎉' : percentage >= 60 ? '👍' : '💪'}
      </div>

      <div>
        <h3 className="text-xl font-bold text-text-primary">
          {isPerfect ? '完美通过！' : percentage >= 60 ? '做得不错！' : '继续加油！'}
        </h3>
        <p className="text-sm text-text-secondary mt-1">
          《{dialogue.titleCn}》学习完成
        </p>
      </div>

      {/* Score */}
      <div className="bg-bg-card rounded-xl p-4 border border-border inline-block">
        <div className="text-3xl font-bold text-primary">{correctCount}/{totalQuestions}</div>
        <div className="text-sm text-text-secondary">正确率 {percentage}%</div>
      </div>

      {/* Key Words Review */}
      <div className="bg-bg-card rounded-xl p-4 border border-border text-left">
        <div className="text-sm font-medium text-text-primary mb-2">本次学到的重点表达</div>
        <div className="flex flex-wrap gap-1.5">
          {dialogue.keyWords.map((word) => (
            <span key={word} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{word}</span>
          ))}
        </div>
      </div>

      {/* Grammar Points */}
      <div className="bg-bg-card rounded-xl p-4 border border-border text-left">
        <div className="text-sm font-medium text-text-primary mb-2">语法要点</div>
        <div className="space-y-1">
          {dialogue.grammarPoints.map((point, idx) => (
            <div key={idx} className="text-xs text-text-secondary">{point}</div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <button
        onClick={onReset}
        className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        <RefreshIcon size={16} />
        选择其他对话
      </button>
    </div>
  );
}
