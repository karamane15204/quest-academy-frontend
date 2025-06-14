
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Play, Award, ArrowRight, Video, FileText, Calendar, CheckCircle, Star, Heart, Smile } from 'lucide-react';
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
      icon: <Video className="h-10 w-10" />,
      title: "Fun Video Learning",
      description: "Watch amazing educational videos with colorful animations and friendly characters!"
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Cool Study Materials",
      description: "Access awesome PDFs, fun presentations, and exciting study guides!"
    },
    {
      icon: <Play className="h-10 w-10" />,
      title: "Educational Games",
      description: "Play super fun games while learning new things every day!"
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Fun Quizzes & Rewards",
      description: "Take exciting quizzes and earn amazing badges and stickers!"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Kids Learning", icon: <Smile className="h-6 w-6" /> },
    { number: "500+", label: "Fun Courses", icon: <BookOpen className="h-6 w-6" /> },
    { number: "50+", label: "Awesome Teachers", icon: <Heart className="h-6 w-6" /> },
    { number: "95%", label: "Kids Love It!", icon: <Star className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-blue-100 to-yellow-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg px-6 py-2 rounded-full shadow-lg animate-pulse">
            🌟 Amazing Learning Adventure! 🌟
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to E-Learn Fun Zone!
          </h1>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
            🎮 Learn with games! 📚 Watch fun videos! 🏆 Earn cool rewards! 
            <br />
            Join thousands of kids having fun while learning!
          </p>
          
          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 border-4 border-pink-300 rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100" 
                  onClick={() => handleRoleSelect('student')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-pink-700 font-bold">Student Fun Zone</CardTitle>
                <CardDescription className="text-lg text-pink-600">Learn, play, and discover amazing things every day!</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white text-lg py-4 rounded-xl shadow-lg font-bold">
                  🎒 Start Learning! <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 border-4 border-purple-300 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100" 
                  onClick={() => handleRoleSelect('teacher')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-purple-700 font-bold">Teacher Helper</CardTitle>
                <CardDescription className="text-lg text-purple-600">Create fun lessons and help kids learn better!</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white text-lg py-4 rounded-xl shadow-lg font-bold">
                  👩‍🏫 Teach Kids! <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 border-4 border-orange-300 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100" 
                  onClick={() => handleRoleSelect('admin')}>
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-orange-700 font-bold">Super Admin</CardTitle>
                <CardDescription className="text-lg text-orange-600">Manage the platform and keep everyone safe!</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white text-lg py-4 rounded-xl shadow-lg font-bold">
                  🛡️ Admin Panel! <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">🎈 Super Cool Features! 🎈</h2>
            <p className="text-2xl text-gray-700 font-medium">Everything you need to have fun while learning!</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 rounded-3xl border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-4 text-white shadow-lg animate-pulse">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl text-blue-700 font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-blue-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">🏆 Amazing Numbers! 🏆</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-200 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4 text-yellow-500">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-bold text-lg">{stat.label}</div>
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
