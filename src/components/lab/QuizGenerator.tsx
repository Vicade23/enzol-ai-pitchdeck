import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2, Brain, CheckCircle, XCircle, Clock } from "lucide-react";

interface QuizGeneratorProps {
  onClose: () => void;
  onGenerate: (data: { score: number; total: number; timeSpent: number }) => void;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuiz: QuizQuestion[] = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: 1
  }
];

export function QuizGenerator({ onClose, onGenerate }: QuizGeneratorProps) {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const [timeLimit, setTimeLimit] = useState(60);
  const [isGenerating, setIsGenerating] = useState(false);
  const [quiz, setQuiz] = useState<QuizQuestion[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const generatedQuiz = sampleQuiz.slice(0, numQuestions);
      setQuiz(generatedQuiz);
      setIsGenerating(false);
      setCurrentQuestion(0);
      setSelectedAnswers([]);
      setShowResults(false);
      setTimeRemaining(timeLimit);
      setQuizStarted(false);
    }, 2500);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setStartTime(new Date());
    setTimeRemaining(timeLimit);
  };

  const finishQuiz = () => {
    const endTime = new Date();
    const timeSpent = startTime ? Math.floor((endTime.getTime() - startTime.getTime()) / 1000) : 0;
    const score = calculateScore();
    setShowResults(true);
    onGenerate({ score, total: quiz?.length || 0, timeSpent });
  };

  useEffect(() => {
    if (quizStarted && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (quizStarted && timeRemaining === 0) {
      finishQuiz();
    }
  }, [quizStarted, timeRemaining]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz!.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quiz[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTopic("");
    setQuizStarted(false);
    setTimeRemaining(0);
    setStartTime(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Take Quiz
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ×
          </Button>
        </div>
        
        {!quiz && !isGenerating && (
          <div className="space-y-3">
            <Input
              placeholder="Enter a topic (e.g., Geography, Science)..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-xs">Questions</Label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={numQuestions}
                  onChange={(e) => setNumQuestions(parseInt(e.target.value) || 5)}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Time (seconds)</Label>
                <Input
                  type="number"
                  min="30"
                  max="600"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(parseInt(e.target.value) || 60)}
                />
              </div>
            </div>
            
            <Button 
              onClick={handleGenerate}
              disabled={!topic.trim()}
              className="w-full"
            >
              Generate Quiz
            </Button>
          </div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center py-8 space-y-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Creating your quiz...</p>
          </div>
        )}

        {quiz && !quizStarted && !showResults && (
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h4 className="font-medium">Quiz Ready!</h4>
              <p className="text-sm text-muted-foreground">
                {quiz.length} questions • {formatTime(timeLimit)} time limit
              </p>
            </div>
            <Button onClick={startQuiz} className="w-full">
              Start Quiz
            </Button>
          </div>
        )}

        {quiz && quizStarted && !showResults && (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Question {currentQuestion + 1} of {quiz.length}</span>
              <div className="flex items-center gap-1 text-primary">
                <Clock className="h-4 w-4" />
                <span className="font-mono">{formatTime(timeRemaining)}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">{quiz[currentQuestion].question}</h4>
              
              <RadioGroup 
                value={selectedAnswers[currentQuestion]?.toString()} 
                onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              >
                {quiz[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <Button 
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="w-full"
            >
              {currentQuestion < quiz.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </div>
        )}

        {showResults && quiz && (
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2">
              {calculateScore() >= quiz.length / 2 ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <XCircle className="h-8 w-8 text-red-500" />
              )}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold">Quiz Complete!</h4>
              <p className="text-muted-foreground">
                You scored {calculateScore()} out of {quiz.length}
              </p>
            </div>
            
            <Button onClick={resetQuiz} className="w-full">
              Take Another Quiz
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}