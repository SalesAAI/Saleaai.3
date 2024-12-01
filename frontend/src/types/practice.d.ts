export interface ScenarioType {
  id: string;
  name: string;
  title: string;
  description: string;
  category: ScenarioCategory;
  sampleDialogue: string;
  welcomeMessage?: string;
  difficulty: DifficultyLevel[];
  objectives: string[];
  skills: string[];
}

export type DifficultyLevel = 'beginner' | 'advanced';

export type ScenarioCategory = 
  | 'Home Sellers'
  | 'Home Buyers'
  | 'Investors'
  | 'Cold Leads'
  | 'Challenging Scenarios'
  | 'Objections and Obstacles';

export interface PracticeSession {
  scenario: ScenarioType;
  difficulty: DifficultyLevel;
}
