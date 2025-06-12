
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, BookOpen, Award, Calendar, Settings, Plus, UserPlus, BookPlus } from 'lucide-react';
import Navbar from '@/components/Navbar';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const platformStats = [
    { label: "Total Users", value: "2,847", change: "+12%", color: "from-blue-500 to-blue-600" },
    { label: "Active Courses", value: "156", change: "+8%", color: "from-green-500 to-green-600" },
    { label: "Monthly Revenue", value: "$24,890", change: "+15%", color: "from-purple-500 to-purple-600" },
    { label: "Completion Rate", value: "87%", change: "+3%", color: "from-orange-500 to-orange-600" }
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, courses, and monitor platform performance.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {platformStats.map((stat, index) => (
            <Card key={index} className={`bg-gradient-to-r ${stat.color} text-white`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-white/60">{stat.change} from last month</p>
                  </div>
                  <div className="opacity-20">
                    {index === 0 && <Users className="h-8 w-8" />}
                    {index === 1 && <BookOpen className="h-8 w-8" />}
                    {index === 2 && <Award className="h-8 w-8" />}
                    {index === 3 && <Calendar className="h-8 w-8" />}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* System Health */}
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
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
              <Card>
                <CardHeader>
                  <CardTitle>Recent Platform Activity</CardTitle>
                  <CardDescription>Latest user and course activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">New course "Advanced React" created</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">15 new student registrations</p>
                        <p className="text-xs text-muted-foreground">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Game engine updated to v2.1</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Add New User
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Search users..." className="max-w-sm" />
                    <div className="flex space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md">
                        <option>All Roles</option>
                        <option>Students</option>
                        <option>Teachers</option>
                        <option>Admins</option>
                      </select>
                      <select className="px-3 py-2 border border-gray-300 rounded-md">
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
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
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
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>Detailed insights and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-sm text-muted-foreground">User Engagement</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">92%</p>
                    <p className="text-sm text-muted-foreground">Course Completion</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">4.8/5</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">156</p>
                    <p className="text-sm text-muted-foreground">Active Sessions</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Analytics Charts Would Go Here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
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
                  <Button className="w-full">Save Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
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
                  <Button className="w-full" variant="outline">Update Security</Button>
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
