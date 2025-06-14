
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
    <div className="min-h-screen" style={{ backgroundColor: '#EFEFEF' }}>
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
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#324047' }}>Teacher Dashboard</h1>
          <p className="text-gray-600">Manage your courses, track student progress, and create engaging content.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card style={{ backgroundColor: '#324047', color: 'white' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Total Students</p>
                  <p className="text-2xl font-bold">105</p>
                </div>
                <Users className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: '#00CECE', color: 'white' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Active Courses</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <BookOpen className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: '#00AAAA', color: 'white' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Assignments</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <FileText className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="text-white" style={{ background: 'linear-gradient(135deg, #00CECE, #324047)' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Avg. Completion</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border-gray-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-teal-100 data-[state=active]:text-teal-700">Overview</TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-teal-100 data-[state=active]:text-teal-700">My Courses</TabsTrigger>
            <TabsTrigger value="students" className="data-[state=active]:bg-teal-100 data-[state=active]:text-teal-700">Students</TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-teal-100 data-[state=active]:text-teal-700">Create Content</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle style={{ color: '#324047' }}>Recent Student Activity</CardTitle>
                  <CardDescription>Latest student progress and performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#EFEFEF' }}>
                      <div>
                        <p className="font-medium" style={{ color: '#324047' }}>{student.name}</p>
                        <p className="text-sm text-gray-600">{student.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium" style={{ color: '#324047' }}>{student.progress}%</p>
                        <Badge 
                          variant={student.status === 'Excellent' ? 'default' : student.status === 'Good' ? 'secondary' : 'destructive'}
                          style={student.status === 'Excellent' ? { backgroundColor: '#00AAAA', color: 'white' } : {}}
                        >
                          {student.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Pending Assignments */}
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle style={{ color: '#324047' }}>Pending Assignments</CardTitle>
                  <CardDescription>Assignments waiting for review</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingAssignments.map((assignment, index) => (
                    <div key={index} className="p-3 rounded-lg" style={{ backgroundColor: '#EFEFEF' }}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium" style={{ color: '#324047' }}>{assignment.title}</h4>
                        <Badge variant="outline" style={{ borderColor: '#00AAAA', color: '#00AAAA' }}>{assignment.course}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          {assignment.submissions} of {assignment.total} submitted
                        </span>
                        <Button size="sm" variant="outline" style={{ borderColor: '#324047', color: '#324047' }}>Review</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold" style={{ color: '#324047' }}>My Courses</h2>
              <Button className="text-white hover:opacity-90" style={{ backgroundColor: '#00CECE' }}>
                <Plus className="h-4 w-4 mr-2" />
                Create New Course
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                  <div className="aspect-video rounded-t-lg flex items-center justify-center" style={{ backgroundColor: '#EFEFEF' }}>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <BookOpen className="h-8 w-8" style={{ color: '#00CECE' }} />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg" style={{ color: '#324047' }}>{course.title}</CardTitle>
                      <Badge 
                        variant={course.status === 'Active' ? 'default' : 'secondary'}
                        style={course.status === 'Active' ? { backgroundColor: '#00AAAA', color: 'white' } : {}}
                      >
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
                        <span style={{ color: '#324047' }}>Average Progress</span>
                        <span style={{ color: '#324047' }}>{course.progress}%</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1 text-white hover:opacity-90" size="sm" style={{ backgroundColor: '#00CECE' }}>Manage</Button>
                        <Button variant="outline" size="sm" style={{ borderColor: '#324047', color: '#324047' }}>Analytics</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle style={{ color: '#324047' }}>Student Management</CardTitle>
                <CardDescription>Monitor and manage your students' progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: 'linear-gradient(135deg, #00CECE, #00AAAA)' }}>
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium" style={{ color: '#324047' }}>{student.name}</p>
                          <p className="text-sm text-gray-600">{student.course}</p>
                        </div>
                      </div>
                      <div className="text-right space-x-4">
                        <span className="text-sm" style={{ color: '#324047' }}>Progress: {student.progress}%</span>
                        <Badge 
                          variant={student.status === 'Excellent' ? 'default' : student.status === 'Good' ? 'secondary' : 'destructive'}
                          style={student.status === 'Excellent' ? { backgroundColor: '#00AAAA', color: 'white' } : {}}
                        >
                          {student.status}
                        </Badge>
                        <Button size="sm" variant="outline" style={{ borderColor: '#324047', color: '#324047' }}>View Details</Button>
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
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle style={{ color: '#324047' }}>Upload Learning Materials</CardTitle>
                  <CardDescription>Add videos, documents, and resources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="content-title" style={{ color: '#324047' }}>Content Title</Label>
                    <Input id="content-title" placeholder="Enter content title" className="border-gray-300 focus:border-teal-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content-type" style={{ color: '#324047' }}>Content Type</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:border-teal-500">
                      <option>Video Lecture</option>
                      <option>PDF Document</option>
                      <option>PowerPoint Presentation</option>
                      <option>Interactive Game</option>
                    </select>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Drag and drop files here, or click to browse</p>
                    <Button className="mt-4" variant="outline" style={{ borderColor: '#324047', color: '#324047' }}>Choose Files</Button>
                  </div>
                  <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#00CECE' }}>
                    Upload Content
                  </Button>
                </CardContent>
              </Card>

              {/* Create Quiz */}
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle style={{ color: '#324047' }}>Create Quiz/Assignment</CardTitle>
                  <CardDescription>Design interactive assessments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quiz-title" style={{ color: '#324047' }}>Quiz Title</Label>
                    <Input id="quiz-title" placeholder="Enter quiz title" className="border-gray-300 focus:border-teal-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiz-course" style={{ color: '#324047' }}>Course</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:border-teal-500">
                      <option>Web Development Fundamentals</option>
                      <option>Interactive JavaScript Games</option>
                      <option>Advanced React Concepts</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiz-type" style={{ color: '#324047' }}>Assessment Type</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:border-teal-500">
                      <option>Multiple Choice Quiz</option>
                      <option>Coding Assignment</option>
                      <option>Project Submission</option>
                      <option>Game-Based Challenge</option>
                    </select>
                  </div>
                  <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#00AAAA' }}>
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
