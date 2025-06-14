import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, BookOpen, Video, FileText, Calendar, CheckCircle, Plus, Upload, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      students: 45,
      progress: 68,
      status: "Active",
      type: "Traditional"
    },
    {
      id: 2,
      title: "Interactive JavaScript Games",
      students: 32,
      progress: 45,
      status: "Active",
      type: "Game-Based"
    },
    {
      id: 3,
      title: "Advanced React Concepts",
      students: 28,
      progress: 82,
      status: "Active",
      type: "Traditional"
    }
  ];

  const recentStudents = [
    { name: "Alice Johnson", course: "Web Development", progress: 85, status: "Excellent" },
    { name: "Bob Smith", course: "JavaScript Games", progress: 65, status: "Good" },
    { name: "Carol Davis", course: "React Concepts", progress: 92, status: "Excellent" },
    { name: "David Wilson", course: "Web Development", progress: 45, status: "Needs Help" }
  ];

  const pendingAssignments = [
    { title: "HTML/CSS Project", course: "Web Development", submissions: 35, total: 45 },
    { title: "Game Logic Quiz", course: "JavaScript Games", submissions: 28, total: 32 },
    { title: "Component Design", course: "React Concepts", submissions: 22, total: 28 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
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
          <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Manage your courses, track student progress, and create engaging content.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Total Students</p>
                  <p className="text-2xl font-bold">105</p>
                </div>
                <Users className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Active Courses</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Assignments</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <FileText className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Avg. Completion</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="content">Create Content</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Student Activity</CardTitle>
                  <CardDescription>Latest student progress and performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{student.progress}%</p>
                        <Badge variant={student.status === 'Excellent' ? 'default' : student.status === 'Good' ? 'secondary' : 'destructive'}>
                          {student.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Pending Assignments */}
              <Card>
                <CardHeader>
                  <CardTitle>Pending Assignments</CardTitle>
                  <CardDescription>Assignments waiting for review</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingAssignments.map((assignment, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{assignment.title}</h4>
                        <Badge variant="outline">{assignment.course}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {assignment.submissions} of {assignment.total} submitted
                        </span>
                        <Button size="sm" variant="outline">Review</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Create New Course
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-r from-purple-100 to-blue-100 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant={course.status === 'Active' ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      {course.students} students • {course.type} Learning
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Average Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1" size="sm">Manage</Button>
                        <Button variant="outline" size="sm">Analytics</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Monitor and manage your students' progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.course}</p>
                        </div>
                      </div>
                      <div className="text-right space-x-4">
                        <span className="text-sm">Progress: {student.progress}%</span>
                        <Badge variant={student.status === 'Excellent' ? 'default' : student.status === 'Good' ? 'secondary' : 'destructive'}>
                          {student.status}
                        </Badge>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Upload Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Upload Learning Materials</CardTitle>
                  <CardDescription>Add videos, documents, and resources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="content-title">Content Title</Label>
                    <Input id="content-title" placeholder="Enter content title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content-type">Content Type</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Video Lecture</option>
                      <option>PDF Document</option>
                      <option>PowerPoint Presentation</option>
                      <option>Interactive Game</option>
                    </select>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Drag and drop files here, or click to browse</p>
                    <Button className="mt-4" variant="outline">Choose Files</Button>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                    Upload Content
                  </Button>
                </CardContent>
              </Card>

              {/* Create Quiz */}
              <Card>
                <CardHeader>
                  <CardTitle>Create Quiz/Assignment</CardTitle>
                  <CardDescription>Design interactive assessments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quiz-title">Quiz Title</Label>
                    <Input id="quiz-title" placeholder="Enter quiz title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiz-course">Course</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Web Development Fundamentals</option>
                      <option>Interactive JavaScript Games</option>
                      <option>Advanced React Concepts</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiz-type">Assessment Type</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Multiple Choice Quiz</option>
                      <option>Coding Assignment</option>
                      <option>Project Submission</option>
                      <option>Game-Based Challenge</option>
                    </select>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    Create Assessment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;
