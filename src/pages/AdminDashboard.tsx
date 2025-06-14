import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, BookOpen, Award, Calendar, Settings, Plus, UserPlus, BookPlus, ArrowLeft, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const platformStats = [
    { label: "Total Users", value: "2,847", change: "+12%", color: "from-orange-500 to-orange-600" },
    { label: "Active Courses", value: "156", change: "+8%", color: "from-teal-500 to-teal-600" },
    { label: "Monthly Revenue", value: "$24,890", change: "+15%", color: "from-indigo-500 to-indigo-600" },
    { label: "Completion Rate", value: "87%", change: "+3%", color: "from-rose-500 to-rose-600" }
  ];

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Teacher", status: "Active", joinDate: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Student", status: "Active", joinDate: "2024-02-20" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Teacher", status: "Active", joinDate: "2024-01-10" },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "Student", status: "Inactive", joinDate: "2024-03-05" }
  ];

  const courses = [
    { id: 1, title: "Web Development Fundamentals", instructor: "John Doe", students: 45, status: "Active", type: "Traditional" },
    { id: 2, title: "Interactive JavaScript Games", instructor: "Jane Smith", students: 32, status: "Active", type: "Game-Based" },
    { id: 3, title: "Data Structures & Algorithms", instructor: "Mike Johnson", students: 28, status: "Draft", type: "Traditional" },
    { id: 4, title: "Unity Game Development", instructor: "Sarah Wilson", students: 38, status: "Active", type: "Game-Based" }
  ];

  const systemHealth = [
    { metric: "Server Uptime", value: "99.9%", status: "Excellent" },
    { metric: "Response Time", value: "142ms", status: "Good" },
    { metric: "Database Load", value: "45%", status: "Normal" },
    { metric: "Storage Usage", value: "67%", status: "Normal" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFEFEF' }}>
      {/* Admin Header */}
      <div style={{ backgroundColor: '#324047' }} className="text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Admin Login
            </Button>
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <Button 
            variant="outline"
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#324047' }}>Admin Dashboard</h1>
          <p className="text-gray-600">Manage users, courses, and monitor platform performance.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card style={{ backgroundColor: '#00CECE', color: 'white' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Total Users</p>
                  <p className="text-2xl font-bold">2,847</p>
                  <p className="text-sm text-white/60">+12% from last month</p>
                </div>
                <Users className="h-8 w-8 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: '#00AAAA', color: 'white' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Active Courses</p>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-white/60">+8% from last month</p>
                </div>
                <BookOpen className="h-8 w-8 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: '#324047', color: 'white' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Monthly Revenue</p>
                  <p className="text-2xl font-bold">$24,890</p>
                  <p className="text-sm text-white/60">+15% from last month</p>
                </div>
                <Award className="h-8 w-8 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="text-white" style={{ background: 'linear-gradient(135deg, #00CECE, #324047)' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Completion Rate</p>
                  <p className="text-2xl font-bold">87%</p>
                  <p className="text-sm text-white/60">+3% from last month</p>
                </div>
                <Calendar className="h-8 w-8 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white">
            <TabsTrigger value="overview" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">Users</TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">Courses</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">Analytics</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* System Health */}
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle style={{ color: '#032539' }}>System Health</CardTitle>
                  <CardDescription>Platform performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {systemHealth.map((health, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{health.metric}</p>
                        <p className="text-2xl font-bold">{health.value}</p>
                      </div>
                      <Badge variant={health.status === 'Excellent' ? 'default' : 'secondary'}>
                        {health.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle style={{ color: '#032539' }}>Recent Platform Activity</CardTitle>
                  <CardDescription>Latest user and course activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: '#FBF5F2' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1C768F' }}></div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#032539' }}>New course "Advanced React" created</p>
                        <p className="text-xs text-gray-600">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: '#FBF5F2' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FA991C' }}></div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#032539' }}>15 new student registrations</p>
                        <p className="text-xs text-gray-600">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: '#FBF5F2' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1C768F' }}></div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#032539' }}>Game engine updated to v2.1</p>
                        <p className="text-xs text-gray-600">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold" style={{ color: '#032539' }}>User Management</h2>
              <Button className="text-white" style={{ background: 'linear-gradient(135deg, #FA991C 0%, #1C768F 100%)' }}>
                <UserPlus className="h-4 w-4 mr-2" />
                Add New User
              </Button>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Search users..." className="max-w-sm" />
                    <div className="flex space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
                        <option>All Roles</option>
                        <option>Students</option>
                        <option>Teachers</option>
                        <option>Admins</option>
                      </select>
                      <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {users.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant={user.role === 'Teacher' ? 'default' : 'secondary'}>
                            {user.role}
                          </Badge>
                          <Badge variant={user.status === 'Active' ? 'default' : 'destructive'}>
                            {user.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{user.joinDate}</span>
                          <Button size="sm" variant="outline">Edit</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold" style={{ color: '#032539' }}>Course Management</h2>
              <Button className="text-white" style={{ background: 'linear-gradient(135deg, #FA991C 0%, #1C768F 100%)' }}>
                <BookPlus className="h-4 w-4 mr-2" />
                Add New Course
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-r from-indigo-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-indigo-600" />
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
                      Instructor: {course.instructor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Students Enrolled</span>
                        <span>{course.students}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Learning Type</span>
                        <span>{course.type}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle style={{ color: '#032539' }}>Platform Analytics</CardTitle>
                <CardDescription>Detailed insights and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FBF5F2' }}>
                    <p className="text-2xl font-bold" style={{ color: '#1C768F' }}>85%</p>
                    <p className="text-sm text-gray-600">User Engagement</p>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FBF5F2' }}>
                    <p className="text-2xl font-bold" style={{ color: '#FA991C' }}>92%</p>
                    <p className="text-sm text-gray-600">Course Completion</p>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FBF5F2' }}>
                    <p className="text-2xl font-bold" style={{ color: '#032539' }}>4.8/5</p>
                    <p className="text-sm text-gray-600">Average Rating</p>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FBF5F2' }}>
                    <p className="text-2xl font-bold" style={{ color: '#1C768F' }}>156</p>
                    <p className="text-sm text-gray-600">Active Sessions</p>
                  </div>
                </div>
                <div className="h-64 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FBF5F2' }}>
                  <p className="text-gray-600">Analytics Charts Would Go Here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle style={{ color: '#032539' }}>Platform Settings</CardTitle>
                  <CardDescription>Configure general platform options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform-name">Platform Name</Label>
                    <Input id="platform-name" defaultValue="E-Learn Platform" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-students">Max Students per Course</Label>
                    <Input id="max-students" type="number" defaultValue="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="game-engine">Game Engine Version</Label>
                    <Input id="game-engine" defaultValue="Unity 2023.2" />
                  </div>
                  <Button className="w-full text-white" style={{ background: 'linear-gradient(135deg, #FA991C 0%, #1C768F 100%)' }}>Save Settings</Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle style={{ color: '#032539' }}>Security Settings</CardTitle>
                  <CardDescription>Manage security and access controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <input type="checkbox" id="two-factor" className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password-policy">Strong Password Policy</Label>
                    <input type="checkbox" id="password-policy" className="rounded" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="session-timeout">Auto Session Timeout</Label>
                    <input type="checkbox" id="session-timeout" className="rounded" defaultChecked />
                  </div>
                  <Button className="w-full" variant="outline" style={{ borderColor: '#1C768F', color: '#1C768F' }}>Update Security</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
