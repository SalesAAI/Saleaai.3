import React, { useState, useMemo } from 'react';
import { Dialog, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import VoicePracticeMode from './VoicePracticeMode';
import PDFUploader from './PDFUploader';
import Logo from './Logo';
import { ScenarioType, DifficultyLevel, ScenarioCategory } from '../types/practice';
import { practiceScenarios } from '../data/practiceScenarios';
import '../styles/PracticeMode.css';

interface PracticeModeProps {
  onExitPracticeMode?: () => void;
}

const PracticeMode: React.FC<PracticeModeProps> = ({ onExitPracticeMode }) => {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioType | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | null>(null);
  const [isPracticing, setIsPracticing] = useState(false);
  const [transcript, setTranscript] = useState<string>('');
  const [showPDFUploader, setShowPDFUploader] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<ScenarioCategory, boolean>>({
    'Home Sellers': true,
    'Home Buyers': false,
    'Investors': false,
    'Cold Leads': false,
    'Challenging Scenarios': false,
    'Objections and Obstacles': false
  });

  // Group scenarios by category
  const scenariosByCategory = useMemo(() => {
    const categories = {} as Record<ScenarioCategory, ScenarioType[]>;
    practiceScenarios.forEach(scenario => {
      if (!categories[scenario.category]) {
        categories[scenario.category] = [];
      }
      categories[scenario.category].push(scenario);
    });
    return categories;
  }, []);

  const handleCategoryToggle = (category: ScenarioCategory) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleScenarioSelect = (scenario: ScenarioType) => {
    setSelectedScenario(scenario);
  };

  const handleDifficultySelect = (difficulty: DifficultyLevel) => {
    setSelectedDifficulty(difficulty);
  };

  const handleStartPractice = () => {
    if (selectedScenario && selectedDifficulty) {
      setIsPracticing(true);
    }
  };

  const handleSpeechDetected = (text: string) => {
    setTranscript(text);
  };

  const handleTrainAI = () => {
    setShowPDFUploader(true);
  };

  const handleDashboard = () => {
    setShowDashboard(true);
  };

  const handleCloseDialog = () => {
    setShowPDFUploader(false);
    setShowDashboard(false);
  };

  const handlePDFUploadComplete = () => {
    setShowPDFUploader(false);
  };

  if (!isPracticing) {
    return (
      <div className="practice-container">
        {/* Header */}
        <div className="app-header">
          <Logo onClick={onExitPracticeMode} />
          <div className="header-buttons">
            <button 
              className="header-button outline"
              onClick={handleTrainAI}
            >
              <UploadFileIcon /> Train AI with PDF
            </button>
            <button 
              className="header-button filled"
              onClick={handleDashboard}
            >
              <DashboardIcon /> Dashboard
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="practice-header">
          <h1>Select Practice Scenario</h1>
        </div>

        <div className="categories-container">
          {Object.entries(scenariosByCategory).map(([category, scenarios]) => (
            <div key={category} className="category-section">
              <div 
                className="category-header"
                onClick={() => handleCategoryToggle(category as ScenarioCategory)}
              >
                <div className="category-title">
                  {category}
                  <span className="category-count">
                    {scenarios.length} scenarios
                  </span>
                </div>
                {expandedCategories[category as ScenarioCategory] ? 
                  <ExpandLessIcon /> : 
                  <ExpandMoreIcon />
                }
              </div>
              
              {expandedCategories[category as ScenarioCategory] && (
                <div className="scenarios-container">
                  {scenarios.map((scenario) => (
                    <div 
                      key={scenario.id}
                      className={`scenario-card ${selectedScenario?.id === scenario.id ? 'selected' : ''}`}
                      onClick={() => handleScenarioSelect(scenario)}
                    >
                      <h3 className="scenario-title">{scenario.title}</h3>
                      <p className="scenario-description">{scenario.description}</p>
                      <div className="scenario-quote">
                        {scenario.sampleDialogue}
                      </div>
                      
                      <div className="difficulty-buttons">
                        {scenario.difficulty.includes('beginner') && (
                          <button
                            className={`difficulty-button beginner ${
                              selectedDifficulty === 'beginner' && selectedScenario?.id === scenario.id ? 'selected' : ''
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleScenarioSelect(scenario);
                              handleDifficultySelect('beginner');
                            }}
                          >
                            Beginner
                          </button>
                        )}
                        {scenario.difficulty.includes('advanced') && (
                          <button
                            className={`difficulty-button advanced ${
                              selectedDifficulty === 'advanced' && selectedScenario?.id === scenario.id ? 'selected' : ''
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleScenarioSelect(scenario);
                              handleDifficultySelect('advanced');
                            }}
                          >
                            Advanced
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="start-button-container">
          <button
            className="start-button"
            disabled={!selectedScenario || !selectedDifficulty}
            onClick={handleStartPractice}
          >
            Start Practice Session
          </button>
        </div>

        {/* PDF Uploader Dialog */}
        <Dialog 
          open={showPDFUploader} 
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { borderRadius: '12px' }
          }}
        >
          <div className="dialog-header">
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Train AI with PDF
            </Typography>
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="dialog-content">
            <PDFUploader onUploadComplete={handlePDFUploadComplete} />
          </div>
        </Dialog>

        {/* Dashboard Dialog */}
        <Dialog 
          open={showDashboard} 
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { borderRadius: '12px' }
          }}
        >
          <div className="dialog-header">
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Practice Dashboard
            </Typography>
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="dialog-content">
            <h2>Practice Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Sessions</h3>
                <div className="stat-value">12</div>
              </div>
              <div className="stat-card">
                <h3>Average Score</h3>
                <div className="stat-value success">85%</div>
              </div>
              <div className="stat-card">
                <h3>Time Practiced</h3>
                <div className="stat-value">4.5h</div>
              </div>
            </div>
            <div className="recent-sessions">
              <h2>Recent Practice Sessions</h2>
              <div className="session-card">
                <h3>Cold Calling Practice</h3>
                <p>Completed 2 hours ago - Score: 88%</p>
              </div>
              <div className="session-card">
                <h3>First-Time Sellers</h3>
                <p>Completed yesterday - Score: 92%</p>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }

  // Practice mode view remains unchanged
  return (
    <div className="practice-container">
      {/* ... rest of the practice mode UI ... */}
    </div>
  );
};

export default PracticeMode;
