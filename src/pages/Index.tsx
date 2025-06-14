
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
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5DC' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 text-white" style={{ backgroundColor: '#007D7A' }}>
            Next Generation Learning Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#3E2723' }}>
            Welcome to E-Learn Platform
          </h1>
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            Experience the future of education with our dual-mode learning system. 
            Combine traditional study methods with innovative game-based learning.
          </p>
          
          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-gray-300 bg-white" 
                  onClick={() => handleRoleSelect('student')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#007D7A' }}>
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl" style={{ color: '#3E2723' }}>Student Portal</CardTitle>
                <CardDescription>Access courses, track progress, and learn interactively</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#007D7A' }}>
                  Enter as Student <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-gray-300 bg-white" 
                  onClick={() => handleRoleSelect('teacher')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FF7F50' }}>
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl" style={{ color: '#3E2723' }}>Teacher Portal</CardTitle>
                <CardDescription>Create content, manage students, and track performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#FF7F50' }}>
                  Enter as Teacher <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-gray-300 bg-white" 
                  onClick={() => handleRoleSelect('admin')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#3E2723' }}>
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl" style={{ color: '#3E2723' }}>Admin Portal</CardTitle>
                <CardDescription>Manage platform, users, and system settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#3E2723' }}>
                  Enter as Admin <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#3E2723' }}>Powerful Learning Features</h2>
            <p className="text-xl text-gray-600">Everything you need for effective online education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#F5B895', color: '#FF7F50' }}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl" style={{ color: '#3E2723' }}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold" style={{ color: '#007D7A' }}>
                  {stat.number}
                </div>
                <div className="font-medium" style={{ color: '#3E2723' }}>{stat.label}</div>
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
