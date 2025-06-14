
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher'>('student');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
    console.log('Login attempt:', { email, password, role: selectedRole });
    
    // Redirect based on selected role
    navigate(`/dashboard/${selectedRole}`);
  };

  const roleOptions = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access courses and track progress',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-teal-400 to-teal-500'
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Create content and manage students',
      icon: <Users className="h-6 w-6" />,
      color: 'from-teal-500 to-teal-600'
    }
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

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold" style={{ color: '#324047' }}>Sign In</CardTitle>
              <CardDescription className="text-gray-600">Welcome back! Please sign in to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium" style={{ color: '#324047' }}>Select Your Role</Label>
                  <div className="grid gap-3">
                    {roleOptions.map((role) => (
                      <div
                        key={role.id}
                        className={`cursor-pointer p-3 rounded-lg border-2 transition-all ${
                          selectedRole === role.id
                            ? 'border-teal-500 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedRole(role.id as 'student' | 'teacher')}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center text-white`}>
                            {role.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium" style={{ color: '#324047' }}>{role.title}</div>
                            <div className="text-sm text-gray-500">{role.description}</div>
                          </div>
                          {selectedRole === role.id && (
                            <Badge style={{ backgroundColor: '#00CECE', color: 'white' }}>Selected</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" style={{ color: '#324047' }}>Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-gray-300 focus:border-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" style={{ color: '#324047' }}>Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-gray-300 focus:border-teal-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white hover:opacity-90"
                  style={{ backgroundColor: '#00CECE' }}
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-medium hover:underline" style={{ color: '#00AAAA' }}>
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
