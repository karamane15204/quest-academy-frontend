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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Go Back Button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-muted-foreground">Continue your learning journey and track your progress.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Courses Enrolled</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Completed</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Study Hours</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <Clock className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Achievements</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Award className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              My Courses
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="games" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Games
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      {course.type === 'Game-Based' ? <Play className="h-8 w-8 text-blue-600" /> : <Video className="h-8 w-8 text-blue-600" />}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant={course.status === 'Completed' ? 'default' : 'secondary'}>
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
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button className="w-full" variant={course.status === 'Completed' ? 'outline' : 'default'}>
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
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{assignment.title}</h3>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{assignment.type}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">Due: {assignment.dueDate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="games" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Game-based learning content */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-r from-green-100 to-blue-100 rounded-t-lg flex items-center justify-center">
                  <Play className="h-16 w-16 text-green-600" />
                </div>
                <CardHeader>
                  <CardTitle>Code Quest Adventure</CardTitle>
                  <CardDescription>Learn programming through interactive challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                    Play Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-r from-purple-100 to-pink-100 rounded-t-lg flex items-center justify-center">
                  <Play className="h-16 w-16 text-purple-600" />
                </div>
                <CardHeader>
                  <CardTitle>Math Puzzle World</CardTitle>
                  <CardDescription>Solve mathematical problems in a game environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`text-center ${achievement.earned ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50'}`}>
                  <CardContent className="p-6">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <Badge variant={achievement.earned ? 'default' : 'secondary'}>
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
