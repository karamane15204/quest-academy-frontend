
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Play, Award, ArrowRight, Video, FileText, Calendar, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<'student' | 'teacher' | 'admin' | null>(null);

  const handleRoleSelect = (role: 'student' | 'teacher' | 'admin') => {
    setUserRole(role);
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate(`/dashboard/${role}`);
    }
  };

  const features = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Learning",
      description: "High-quality educational videos with interactive elements"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Library",
      description: "Access PDFs, presentations, and study materials"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Game-Based Learning",
      description: "Unity-powered educational games and simulations"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Assessments & Quizzes",
      description: "Track progress with interactive quizzes and assignments"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Students" },
    { number: "500+", label: "Courses Available" },
    { number: "50+", label: "Expert Teachers" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-blue-700 to-purple-800 text-white border-0">
            Next Generation Learning Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Welcome to E-Learn Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Experience the future of education with our dual-mode learning system. 
            Combine traditional study methods with innovative game-based learning.
          </p>
          
          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-500 bg-slate-800 border-slate-700" 
                  onClick={() => handleRoleSelect('student')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Student Portal</CardTitle>
                <CardDescription className="text-gray-400">Access courses, track progress, and learn interactively</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
                  Enter as Student <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-500 bg-slate-800 border-slate-700" 
                  onClick={() => handleRoleSelect('teacher')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Teacher Portal</CardTitle>
                <CardDescription className="text-gray-400">Create content, manage students, and track performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white">
                  Enter as Teacher <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-indigo-500 bg-slate-800 border-slate-700" 
                  onClick={() => handleRoleSelect('admin')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Admin Portal</CardTitle>
                <CardDescription className="text-gray-400">Manage platform, users, and system settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white">
                  Enter as Admin <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Powerful Learning Features</h2>
            <p className="text-xl text-gray-300">Everything you need for effective online education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center mb-4 text-blue-400">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
