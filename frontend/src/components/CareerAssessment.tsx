import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { useUser } from '../contexts/UserContext';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { 
  BrainCircuit,
  Computer,
  Palette,
  Building2,
  Heart,
  Beaker,
  PenTool,
  Users,
  Calculator,
  Globe,
  Music,
  Camera,
  ChevronLeft,
  Sparkles,
  Plus,
  X
} from 'lucide-react';


interface Interest {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}

const interests: Interest[] = [
  { id: 'tech', name: 'Technology', icon: Computer, color: 'bg-blue-500' },
  { id: 'design', name: 'Design', icon: Palette, color: 'bg-purple-500' },
  { id: 'business', name: 'Business', icon: Building2, color: 'bg-green-500' },
  { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'bg-red-500' },
  { id: 'science', name: 'Science', icon: Beaker, color: 'bg-cyan-500' },
  { id: 'writing', name: 'Writing', icon: PenTool, color: 'bg-amber-500' },
  { id: 'social', name: 'Social Work', icon: Users, color: 'bg-pink-500' },
  { id: 'finance', name: 'Finance', icon: Calculator, color: 'bg-indigo-500' },
  { id: 'international', name: 'International', icon: Globe, color: 'bg-teal-500' },
  { id: 'arts', name: 'Arts', icon: Music, color: 'bg-orange-500' },
  { id: 'media', name: 'Media', icon: Camera, color: 'bg-violet-500' }
];

export function CareerAssessment() {
  const navigate = useNavigate();
  const { setUserData } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    skills: [] as string[],
    interests: [] as string[]
  });
  const [customSkill, setCustomSkill] = useState('');
  const [showCustomSkill, setShowCustomSkill] = useState(false);

  const predefinedSkills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'HTML/CSS',
    'Project Management', 'Communication', 'Leadership', 'Problem Solving',
    'Data Analysis', 'Marketing', 'Sales', 'Design', 'Writing'
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleAddCustomSkill = () => {
    if (customSkill.trim() && !formData.skills.includes(customSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, customSkill.trim()]
      }));
      setCustomSkill('');
      setShowCustomSkill(false);
    }
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(i => i !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assessment Data:', formData);
    // Save user data to context
    setUserData(formData);
    // Navigate to recommendations page
    navigate('/recommendations');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <header className="border-b border-border/50 bg-gradient-card/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:bg-muted/60"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-smooth">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-heading">CareerAI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Step 1 of 1</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Tell us about yourself
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us understand your background and preferences to provide personalized career recommendations
          </p>
        </div>

        <Card className="bg-gradient-card border-0 shadow-floating">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name Field */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-lg font-semibold text-heading">
                  What's your name?
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Education Level */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-heading">
                  What's your education level?
                </Label>
                <Select 
                  value={formData.education} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}
                >
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="associate">Associate Degree</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD/Doctorate</SelectItem>
                    <SelectItem value="bootcamp">Bootcamp/Certificate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-heading">
                  What are your key skills?
                </Label>
                <p className="text-muted-foreground">
                  Select all that apply or add your own
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {predefinedSkills.map((skill) => (
                    <Button
                      key={skill}
                      type="button"
                      variant={formData.skills.includes(skill) ? "default" : "outline"}
                      onClick={() => handleSkillToggle(skill)}
                      className={`${formData.skills.includes(skill) 
                        ? 'bg-gradient-primary text-white' 
                        : 'hover:bg-muted/60'
                      } transition-all duration-200`}
                    >
                      {skill}
                    </Button>
                  ))}
                  
                  {formData.skills
                    .filter(skill => !predefinedSkills.includes(skill))
                    .map((skill) => (
                    <Button
                      key={skill}
                      type="button"
                      variant="default"
                      onClick={() => handleSkillToggle(skill)}
                      className="bg-gradient-primary text-white group"
                    >
                      {skill}
                      <X className="w-3 h-3 ml-2 opacity-60 group-hover:opacity-100" />
                    </Button>
                  ))}
                  
                  {!showCustomSkill ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowCustomSkill(true)}
                      className="border-dashed hover:bg-muted/60"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Custom Skill
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Input
                        value={customSkill}
                        onChange={(e) => setCustomSkill(e.target.value)}
                        placeholder="Enter skill"
                        className="w-40 h-9"
                        onKeyPress={(e) => e.key === 'Enter' && handleAddCustomSkill()}
                      />
                      <Button
                        type="button"
                        size="sm"
                        onClick={handleAddCustomSkill}
                        disabled={!customSkill.trim()}
                      >
                        Add
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setShowCustomSkill(false);
                          setCustomSkill('');
                        }}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-heading">
                  What are your interests?
                </Label>
                <p className="text-muted-foreground">
                  Choose areas that excite you and align with your passions
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {interests.map((interest) => {
                    const isSelected = formData.interests.includes(interest.id);
                    const IconComponent = interest.icon;
                    
                    return (
                      <Card
                        key={interest.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-smooth ${
                          isSelected 
                            ? 'ring-2 ring-primary bg-primary/5 shadow-smooth' 
                            : 'hover:bg-muted/50 bg-gradient-card'
                        }`}
                        onClick={() => handleInterestToggle(interest.id)}
                      >
                        <CardContent className="p-6 text-center space-y-3">
                          <div className={`w-12 h-12 rounded-xl ${interest.color} flex items-center justify-center shadow-smooth mx-auto ${
                            isSelected ? 'scale-110' : 'group-hover:scale-105'
                          } transition-transform duration-200`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className={`font-medium ${
                            isSelected ? 'text-primary' : 'text-heading'
                          } transition-colors duration-200`}>
                            {interest.name}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8 text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-200 shadow-floating ai-glow text-lg px-12 py-4 h-auto"
                  disabled={!formData.name || !formData.education || formData.skills.length === 0 || formData.interests.length === 0}
                >
                  <span>Get My Career Recommendations</span>
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Your assessment will be processed instantly using AI
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}