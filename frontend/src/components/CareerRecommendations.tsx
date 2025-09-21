import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { 
  BrainCircuit,
  Code,
  Palette,
  TrendingUp,
  Heart,
  Users,
  ChevronLeft,
  ArrowRight,
  Star,
  Target,
  Award
} from 'lucide-react';


interface CareerCard {
  id: string;
  title: string;
  description: string;
  matchPercentage: number;
  icon: React.ElementType;
  color: string;
  skills: string[];
  avgSalary: string;
}

const careerRecommendations: CareerCard[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Design and develop software applications, systems, and platforms using various programming languages and technologies.',
    matchPercentage: 95,
    icon: Code,
    color: 'bg-blue-500',
    skills: ['JavaScript', 'React', 'Problem Solving'],
    avgSalary: '$95k - $150k'
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    description: 'Create intuitive and engaging user experiences for digital products through research, design, and testing.',
    matchPercentage: 88,
    icon: Palette,
    color: 'bg-purple-500',
    skills: ['Design', 'Communication', 'Problem Solving'],
    avgSalary: '$75k - $130k'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Lead product development from concept to launch, working with cross-functional teams to deliver value to users.',
    matchPercentage: 82,
    icon: TrendingUp,
    color: 'bg-green-500',
    skills: ['Leadership', 'Communication', 'Problem Solving'],
    avgSalary: '$110k - $180k'
  },
  {
    id: 'healthcare-admin',
    title: 'Healthcare Administrator',
    description: 'Manage healthcare facilities and services, ensuring efficient operations and quality patient care.',
    matchPercentage: 76,
    icon: Heart,
    color: 'bg-red-500',
    skills: ['Communication', 'Leadership', 'Problem Solving'],
    avgSalary: '$85k - $140k'
  },
  {
    id: 'hr-specialist',
    title: 'HR Business Partner',
    description: 'Partner with business leaders to develop people strategies that drive organizational success and employee engagement.',
    matchPercentage: 73,
    icon: Users,
    color: 'bg-amber-500',
    skills: ['Communication', 'Social Work', 'Leadership'],
    avgSalary: '$70k - $120k'
  }
];

export function CareerRecommendations() {
  const navigate = useNavigate();
  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-amber-600';
    return 'text-gray-600';
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 80) return 'bg-blue-500';
    if (percentage >= 70) return 'bg-amber-500';
    return 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 dark:from-background dark:via-background dark:to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-white/80 dark:bg-gradient-card/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/assessment')}
              className="flex items-center gap-2 hover:bg-muted/60"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Assessment</span>
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
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>AI Analysis Complete</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Your Recommended 
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Career Paths</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based on your skills, interests, and goals, here are the career paths that align best with your profile
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.1s'}}>
          <Card className="bg-white/70 dark:bg-gradient-card border-0 shadow-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-smooth mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-heading mb-1">5</div>
              <div className="text-sm text-muted-foreground">Career Matches</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/70 dark:bg-gradient-card border-0 shadow-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-smooth mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-heading mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Top Match Score</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/70 dark:bg-gradient-card border-0 shadow-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center shadow-smooth mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-heading mb-1">3-6</div>
              <div className="text-sm text-muted-foreground">Months to Start</div>
            </CardContent>
          </Card>
        </div>

        {/* Career Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {careerRecommendations.map((career, index) => {
            const IconComponent = career.icon;
            
            return (
              <Card 
                key={career.id} 
                className="group hover:shadow-floating transition-all duration-300 cursor-pointer bg-white/70 dark:bg-gradient-card border-0 shadow-smooth hover-scale animate-fade-in"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${career.color} flex items-center justify-center shadow-smooth group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getMatchColor(career.matchPercentage)} mb-1`}>
                        {career.matchPercentage}%
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">Match</div>
                    </div>
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl font-bold text-heading group-hover:text-primary transition-colors duration-200 mb-2">
                      {career.title}
                    </CardTitle>
                    <div className="w-full bg-muted rounded-full h-2 mb-3">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(career.matchPercentage)}`}
                        style={{ width: `${career.matchPercentage}%` }}
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {career.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-heading mb-2">Matching Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-heading mb-1">Average Salary</div>
                      <div className="text-lg font-semibold text-accent">{career.avgSalary}</div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-200 shadow-smooth group-hover:shadow-floating"
                    onClick={() => navigate('/roadmap')}
                  >
                    <span>View Roadmap</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 border-0 shadow-smooth">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-heading">
                  Ready to Start Your 
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">Career Journey?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get detailed roadmaps, skill assessments, and personalized guidance for your chosen career path
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/dashboard')} 
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-200 shadow-floating ai-glow text-lg px-8 py-4 h-auto"
                  >
                    <span>Access Your Dashboard</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => navigate('/assessment')}
                    className="border-2 hover:bg-muted/60 transition-all duration-200 text-lg px-8 py-4 h-auto"
                  >
                    <span>Retake Assessment</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}