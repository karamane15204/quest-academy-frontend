
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Play, Video, FileText, Award, Calendar, CheckCircle, Clock, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "John Doe",
      progress: 75,
      type: "Traditional",
      duration: "12 weeks",
      thumbnail: "/api/placeholder/300/200",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Interactive JavaScript Games",
      instructor: "Jane Smith",
      progress: 45,
      type: "Game-Based",
      duration: "8 weeks",
      thumbnail: "/api/placeholder/300/200",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      instructor: "Mike Johnson",
      progress: 100,
      type: "Traditional",
      duration: "10 weeks",
      thumbnail: "/api/placeholder/300/200",
      status: "Completed"
    }
  ];

  const upcomingAssignments = [
    { title: "JavaScript Quiz", dueDate: "Dec 15", course: "Web Development", type: "Quiz" },
    { title: "Game Design Project", dueDate: "Dec 18", course: "Interactive Games", type: "Project" },
    { title: "Algorithm Analysis", dueDate: "Dec 20", course: "Data Structures", type: "Assignment" }
  ];

  const achievements = [
    { title: "First Course Completed", icon: "🎯", earned: true },
    { title: "Quiz Master", icon: "🧠", earned: true },
    { title: "Game Developer", icon: "🎮", earned: false },
    { title: "Perfect Attendance", icon: "📅", earned: true }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1EB' }}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Go Back Button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#657165' }}>Welcome back, Student!</h1>
          <p className="text-gray-600">Continue your learning journey and track your progress.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="text-white" style={{ background: 'linear-gradient(135deg, #99CDD8, #E8B4B8)' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Courses Enrolled</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <BookOpen className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="text-white" style={{ backgroundColor: '#E8B4B8' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Completed</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <CheckCircle className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: '#657165', color: 'white' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Study Hours</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <Clock className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: '#99CDD8', color: 'white' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Achievements</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Award className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border-gray-200">
            <TabsTrigger value="courses" className="flex items-center gap-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700">
              <BookOpen className="h-4 w-4" />
              My Courses
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center gap-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700">
              <Calendar className="h-4 w-4" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="games" className="flex items-center gap-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700">
              <Play className="h-4 w-4" />
              Games
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700">
              <Award className="h-4 w-4" />
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                  <div className="aspect-video rounded-t-lg flex items-center justify-center" style={{ backgroundColor: '#F7DDD2' }}>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      {course.type === 'Game-Based' ? <Play className="h-8 w-8" style={{ color: '#99CDD8' }} /> : <Video className="h-8 w-8" style={{ color: '#99CDD8' }} />}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg" style={{ color: '#657165' }}>{course.title}</CardTitle>
                      <Badge 
                        variant={course.status === 'Completed' ? 'default' : 'secondary'}
                        style={course.status === 'Completed' ? { backgroundColor: '#E8B4B8', color: 'white' } : {}}
                      >
                        {course.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      Instructor: {course.instructor} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span style={{ color: '#657165' }}>Progress</span>
                          <span style={{ color: '#657165' }}>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button 
                        className="w-full text-white hover:opacity-90" 
                        variant={course.status === 'Completed' ? 'outline' : 'default'}
                        style={course.status === 'Completed' ? { color: '#657165', borderColor: '#657165' } : { backgroundColor: '#99CDD8' }}
                      >
                        {course.status === 'Completed' ? 'Review Course' : 'Continue Learning'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <div className="grid gap-4">
              {upcomingAssignments.map((assignment, index) => (
                <Card key={index} className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F7DDD2' }}>
                          <FileText className="h-6 w-6" style={{ color: '#99CDD8' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold" style={{ color: '#657165' }}>{assignment.title}</h3>
                          <p className="text-sm text-gray-600">{assignment.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" style={{ borderColor: '#E8B4B8', color: '#E8B4B8' }}>{assignment.type}</Badge>
                        <p className="text-sm text-gray-600 mt-1">Due: {assignment.dueDate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="games" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                <div className="aspect-video rounded-t-lg flex items-center justify-center" style={{ backgroundColor: '#F7DDD2' }}>
                  <Play className="h-16 w-16" style={{ color: '#99CDD8' }} />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: '#657165' }}>Code Quest Adventure</CardTitle>
                  <CardDescription>Learn programming through interactive challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#99CDD8' }}>
                    Play Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                <div className="aspect-video rounded-t-lg flex items-center justify-center" style={{ backgroundColor: '#F7DDD2' }}>
                  <Play className="h-16 w-16" style={{ color: '#E8B4B8' }} />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: '#657165' }}>Math Puzzle World</CardTitle>
                  <CardDescription>Solve mathematical problems in a game environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#E8B4B8' }}>
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`text-center ${achievement.earned ? 'border-2' : 'bg-gray-100'}`}
                  style={achievement.earned ? { borderColor: '#99CDD8', backgroundColor: '#D4E6D4' } : {}}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <h3 className="font-semibold mb-2" style={{ color: '#657165' }}>{achievement.title}</h3>
                    <Badge 
                      variant={achievement.earned ? 'default' : 'secondary'}
                      style={achievement.earned ? { backgroundColor: '#E8B4B8', color: 'white' } : {}}
                    >
                      {achievement.earned ? 'Earned' : 'Locked'}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
